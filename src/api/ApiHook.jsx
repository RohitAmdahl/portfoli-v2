import React, { useEffect, useState } from "react";
import { db } from "../firebase.config";
import { collection, getDocs } from "firebase/firestore";

const ApiHook = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "myProjects"));

      const newData = snapshot.docs.map((doc) => doc.data());
      console.log(newData);
      setData(newData);
    };

    fetchData();
    console.log(fetchData());
  }, []);

  return (
    <div className="container mx-auto my-10 max-w-5xl py-9">
      {data.map((item) => {
        console.log(item);
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default ApiHook;
