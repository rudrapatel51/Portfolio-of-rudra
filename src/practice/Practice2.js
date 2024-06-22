import React, { useState, useEffect } from "react";

const Practice2 = () => {
  const [items, setItems] = useState([]);
  const [resource, setResource] = useState("posts");
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resource]);
  return (
    <div>
      <button onClick={() => setResource("posts")}>posts</button>
      <button onClick={() => setResource("users")}>users</button>
      <button onClick={() => setResource("comments")}>comments</button>
      <h1>{resource}</h1>
      {items.map((item,index) => {
        return <pre key={index}>{JSON.stringify(item)}
        </pre>;
})}
    </div>
  );
};

export default Practice2;
