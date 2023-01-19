import React, { useEffect, useState } from "react";

const ProductCard = ({ pd }: { pd: any }) => {
  const [isbigdesc, setIsbigdesc] = useState(false);

  useEffect(() => {
    if (pd?.description.length > 150) {
      setIsbigdesc(true);
    }
  }, []);

  return (
    <div className="card w-[350px] hover:scale-105 ease-in duration-100 cursor-pointer  h-96 bg-base-100 border border-primary shadow-xl">
      <figure className="relative">
        <img
          src={pd?.image}
          height={20}
          width={20}
          className="h-full w-full object-cover"
          alt="Shoes"
        />
        <div className="badge absolute bottom-2 right-2 badge-primary">
          {pd?.category}
        </div>
      </figure>
      <div className="card-body px-4 p-2">
        <h2 className="card-title ">{pd?.title}</h2>
        <hr  className="text-primary"/>
        {isbigdesc ? (
          <p className="">
            {pd?.description.substring(0, 150)}...
            <span onClick={()=> setIsbigdesc(false)} className="text-accent cursor-pointer"> Read More</span>
          </p>
        ) : (
          <p>
            {pd?.description}
            <span onClick={()=> setIsbigdesc(true)} className="text-accent cursor-pointer">Read Less</span>
          </p>
        )}

        {/* {pd?.description.length > 150 && (
              <span className="btn h-10 w-16">Read More</span>
            )} */}
      </div>
    </div>
  );
};

export default ProductCard;
