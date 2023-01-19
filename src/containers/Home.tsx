import { Loader, ProductCard } from "../components";
import { useAppContext } from "../context/AppContext";

const Home = () => {
  const { products, isloading, catvalue } = useAppContext();

  return (
    <div className="flex   flex-col items-center">
      {!isloading ? (
        <>
          <div className="text-3xl font-semibold py-5">{catvalue}</div>
          <div className="grid w-full  box-border p-6 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {products?.map((d: any) => (
              <ProductCard key={d.id} pd={d} />
            ))}
          </div>
        </>
      ) : (
        <Loader message="Loading..." />
      )}
    </div>
  );
};

export default Home;
