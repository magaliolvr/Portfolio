import React from "react";
import { useState, useEffect } from "react";

export const useData = (type) => {
  const [items, setItems] = useState(null);
  {
    /*  useState null permite que items se inicialize como null, podendo receber tipos de dados como por exemplo um array ou um objeto, ou número ou string. */
  }
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {

        setIsLoading(true);
        
      try {
        const data = await fetch(`https://api.artic.edu/api/v1/${type}`);
        const newDataList = await data.json();
        
        // console.log("new " + `${type}` + " list", newDataList);
        
        setItems(newDataList.results || newDataList); // Se newDataList.results for undefined, usa newDataList
      
    } catch (error) {
        console.log("error", error);


      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [type]);

  return { items, isLoading };
};