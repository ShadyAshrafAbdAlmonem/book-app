import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function BookSavedComponent() {
  const location = useLocation();
  const savedBooks = location.state?.savedBooks || []; 
  const navigate = useNavigate();

  const handleBookRead = (book) => {
    if (book.price > 0) {
      alert(`You cannot read "${book.name}" as it is not free.`);
    } else {
      navigate("/readbook", { state: { book } });
    }
  };

  return (
    <div>
      <h1>Saved Books</h1>
      {savedBooks.length > 0 ? (
        <div>
          {savedBooks.map((book) => (
            <div
              key={book.id}
              style={{ margin: "10px", cursor: "pointer" }}
            >
              <img src={book.img} alt={book.name} style={{ width: "100px", height: "150px" }} />
              <p>{book.name}</p>
              {book.price === 0 ? (
                <button
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "blue",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleBookRead(book)}
                >
                  Read
                </button>
              ) : (
                <p style={{ color: "red" }}>This book is not free. Cannot read it.</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No books saved yet.</p>
      )}
    </div>
  );
}
