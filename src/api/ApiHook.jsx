import React, { useEffect, useState } from "react";
import { db } from "../../firebase.config";

const ApiHook = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await db.collection("myProjects").get();
      console.log(snapshot);
      const newData = snapshot.docs.map((doc) => doc.data());
      console.log(newData);
      setData(newData);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-10 max-w-5xl py-9">
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ApiHook;
