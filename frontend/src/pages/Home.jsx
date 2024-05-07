import React, { useEffect, useState } from "react";
import Spinner from "../component/Spinner";

import axios from "axios";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BooksCards from "../component/home/BooksCards";
import BooksTable from "../component/home/BooksTable";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setloading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setloading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-3">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4x1" />
        </Link>
      </div>
      {loading ? <Spinner /> : showType === 'table' ? (<BooksTable books={books} />) : (<BooksCards books={books} />)}
    </div>
  );
};

export default Home;
