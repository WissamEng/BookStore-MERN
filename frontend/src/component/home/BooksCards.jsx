

import BookSinglCard from "./BookSinglCard";

const BooksCards = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item) => (
        <BookSinglCard key={item._id} book={item}/>
      ))}
    </div>
  );
};

export default BooksCards;
