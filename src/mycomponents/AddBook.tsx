//import React from 'react'

import axios from "axios";
import { FormEvent, useState } from "react";

export default function AddBook() {
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = (e: FormEvent) => {
    e.preventDefault();
    const book = {bookName,author,price};
    axios.post("http://localhost:8979/book/add",book).then(res=>{
        console.log(res);
    })

  };

  const handleBookName = (e: any) => {
    setBookName(e.target.value);
  };

  const handleAuthor = (x: any) => {
    setAuthor(x.target.value);
  };

  const handlePrice = (a: any) => {
    setPrice(a.target.value);
  };

  return (
    <div>
      <h2>Add New Book</h2>

      <form onSubmit={handleAdd}>
        <div>
          <label>Book Name</label>
          <input type="text" value={bookName} onChange={handleBookName} />
        </div>
        <div>
          <label>Author</label>
          <input type="text" value={author} onChange={handleAuthor} />
        </div>
        <div>
          <label>Price</label>
          <input type="text" value={price} onChange={handlePrice} />
        </div>
        <div>
          <button>ADD</button>
        </div>
      </form>
    </div>
  );
}
