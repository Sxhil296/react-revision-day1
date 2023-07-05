import React from "react";
import ReactDOM from "react-dom/client";

function BookList() {
  return (
    <div>
      <h2>Amazon Best Selling Books</h2>
      <Book />
      <Book />
      <Book />
    </div>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />

    </article>
  )
}

const Image = () => <img src="https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg" alt="Atomic Habits" />
const Title = () => <h2>Atomic Habits</h2>
const Author = () => {
  return <h4>James Clear</h4>
}
 
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
