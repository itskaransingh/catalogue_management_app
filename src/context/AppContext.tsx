import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import { createContext, useContext } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
interface AppContextInterface {
  isloading: boolean;
  catvalue: string;
  setcatvalue: Dispatch<SetStateAction<string>>;
  products: any;
  categories: any;
  analyticsdata : any
}

export const cartContextDefaultValue: AppContextInterface = {
  isloading: false,
  catvalue: 'All',
  setcatvalue:()=> 'All',
  products:null,
  categories: [],
  analyticsdata: {}
}

const AppContext = createContext <AppContextInterface>(cartContextDefaultValue);





export const AppContextProv = ({ children }: { children: any }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const [isloading, setIsloading] = useState(false);
  const [catvalue, setcatvalue] = useState("All");
  const [products, setProducts] = useState(null);
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    setIsloading(true);
    axios
      .get(
        `https://fakestoreapi.com/products${
          catvalue !== "All" ? "/category/" + catvalue : ""
        }`
      )
      .then((d) => {
        setProducts(d.data);
        setIsloading(false);
      });
  }, [catvalue]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/categories`).then((d) => {
      setcategories(d.data);
    });
  }, []);

  const noofproducts = (cat: string) => {
    return products?.filter((p) => p?.category === cat).length;
  };

  const analyticsdata = {
    labels: categories,
    datasets: [
      {
        label: "# of Items",
        data: [
          noofproducts(categories[0]),
          noofproducts(categories[1]),
          noofproducts(categories[2]),
          noofproducts(categories[3]),
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const state = {
    catvalue,
    setcatvalue,
    products,
    categories,
    isloading,
    analyticsdata,
  };
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
