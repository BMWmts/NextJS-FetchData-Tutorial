'use client';
import { useState, useEffect } from "react";

interface Data {
  id: number;
  title: string;
  body: string;
}

export default function Home() {

  const [data, setData] = useState<Data[]>([]);

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetcching data: ", error);
        data.length = 0; // Clear data on error
        setData(data);
      }
    };

    fetchData();
    
  }, []);

  return (
    <main>
      <ul>
        {data.map((item) => (
          <li key = {item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
