import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaExclamationCircle } from "react-icons/fa";
import "./homeStyle.css";

const booksData = [
  {
    id: 1,
    img: "https://marketplace.canva.com/EAFfSnGl7II/2/0/1003w/canva-elegant-dark-woods-fantasy-photo-book-cover-vAt8PH1CmqQ.jpg",
    name: "To Kill a Mockingbird",
    content: "Content of To Kill a Mockingbird",
    type: "policy",
    price: 10,
  },
  {
    id: 2,
    img: "https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg",
    name: "1984",
    content: "Content of 1984, Content of 1984, Content of 1984",
    type: "economics",
    price: 0,
  },
  {
    id: 3,
    img: "https://marketplace.canva.com/EAFXKFIDad4/1/0/1003w/canva-brown-mystery-novel-book-cover-cSu1pdo96zA.jpg",
    name: "The Great Gatsby",
    content: "Content of The Great Gatsby",
    type: "religions",
    price: 5,
  },
  {
    id: 4,
    img: "https://marketplace.canva.com/EAFXKFIDad4/1/0/1003w/canva-brown-mystery-novel-book-cover-cSu1pdo96zA.jpg",
    name: "The Great Gatsby",
    content: "Content of The Great Gatsby",
    type: "religions",
    price: 5,
  },
  {
    id: 5,
    img: "https://marketplace.canva.com/EAFXKFIDad4/1/0/1003w/canva-brown-mystery-novel-book-cover-cSu1pdo96zA.jpg",
    name: "The Great Gatsby",
    content: "Content of The Great Gatsby",
    type: "religions",
    price: 5,
  },
  {
    id: 6,
    img: "https://marketplace.canva.com/EAFXKFIDad4/1/0/1003w/canva-brown-mystery-novel-book-cover-cSu1pdo96zA.jpg",
    name: "The Great Gatsby",
    content: "Content of The Great Gatsby",
    type: "religions",
    price: 5,
  },
  {
    id: 7,
    img: "https://marketplace.canva.com/EAFXKFIDad4/1/0/1003w/canva-brown-mystery-novel-book-cover-cSu1pdo96zA.jpg",
    name: "The Great Gatsby",
    content: "Content of The Great Gatsby",
    type: "religions",
    price: 5,
  },
  {
    id: 8,
    img: "https://marketplace.canva.com/EAFXKFIDad4/1/0/1003w/canva-brown-mystery-novel-book-cover-cSu1pdo96zA.jpg",
    name: "The Great Gatsby",
    content: "Content of The Great Gatsby",
    type: "religions",
    price: 5,
  },
  {
    id: 9,
    img: "https://marketplace.canva.com/EAFXKFIDad4/1/0/1003w/canva-brown-mystery-novel-book-cover-cSu1pdo96zA.jpg",
    name: "The Great Gatsby",
    content: "Content of The Great Gatsby",
    type: "religions",
    price: 5,
  },
  {
    id: 10,
    img: "https://marketplace.canva.com/EAFXKFIDad4/1/0/1003w/canva-brown-mystery-novel-book-cover-cSu1pdo96zA.jpg",
    name: "The Great Gatsby",
    content: "Content of The Great Gatsby",
    type: "religions",
    price: 5,
  },
  {
    id: 11,
    img: "https://marketplace.canva.com/EAFXKFIDad4/1/0/1003w/canva-brown-mystery-novel-book-cover-cSu1pdo96zA.jpg",
    name: "The Great Gatsby",
    content: "Content of The Great Gatsby",
    type: "religions",
    price: 5,
  },
  {
    id: 12,
    img: "https://marketplace.canva.com/EAFXKFIDad4/1/0/1003w/canva-brown-mystery-novel-book-cover-cSu1pdo96zA.jpg",
    name: "The Great Gatsby",
    content: "Content of The Great Gatsby",
    type: "religions",
    price: 5,
  },
  {
    id: 13,
    img: "https://marketplace.canva.com/EAFXKFIDad4/1/0/1003w/canva-brown-mystery-novel-book-cover-cSu1pdo96zA.jpg",
    name: "The Great Gatsby",
    content: "Content of The Great Gatsby",
    type: "religions",
    price: 5,
  },
  {
    id: 14,
    img: "https://marketplace.canva.com/EAFXKFIDad4/1/0/1003w/canva-brown-mystery-novel-book-cover-cSu1pdo96zA.jpg",
    name: "The Great Gatsby",
    content: "Content of The Great Gatsby",
    type: "religions",
    price: 5,
  },
  {
    id: 15,
    img: "https://marketplace.canva.com/EAFXKFIDad4/1/0/1003w/canva-brown-mystery-novel-book-cover-cSu1pdo96zA.jpg",
    name: "The Great Gatsby",
    content: "Content of The Great Gatsby",
    type: "religions",
    price: 5,
  },
  {
    id: 16,
    img: "https://marketplace.canva.com/EAFXKFIDad4/1/0/1003w/canva-brown-mystery-novel-book-cover-cSu1pdo96zA.jpg",
    name: "The Great Gatsby",
    content: "Content of The Great Gatsby",
    type: "religions",
    price: 5,
  },
  {
    id: 17,
    img: "https://marketplace.canva.com/EAFXKFIDad4/1/0/1003w/canva-brown-mystery-novel-book-cover-cSu1pdo96zA.jpg",
    name: "The Great Gatsby",
    content: "Content of The Great Gatsby",
    type: "religions",
    price: 5,
  },
];

export default function HomeComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedTypeDropdown, setSelectedTypeDropdown] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(booksData);
  const [savedBooks, setSavedBooks] = useState([]); 
  const [reportedBooks, setReportedBooks] = useState([]); 
  const [reportDialogOpen, setReportDialogOpen] = useState(false); 
  const [reportReasons, setReportReasons] = useState({
    religious: false,
    political: false,
    violence: false,
    foulLanguage: false,
    insulting: false,
    pornographic: false,
  });
  const [selectedBook, setSelectedBook] = useState(null);
  const [reportSubmitted, setReportSubmitted] = useState(false); 
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    filterBooks(value, selectedTypes, selectedTypeDropdown);
  };

  const handleTypeChange = (e) => {
    const { value, checked } = e.target;
    let updatedTypes = [...selectedTypes];
    if (checked) {
      updatedTypes.push(value);
    } else {
      updatedTypes = updatedTypes.filter((type) => type !== value);
    }
    setSelectedTypes(updatedTypes);
    filterBooks(searchTerm, updatedTypes, selectedTypeDropdown);
  };

  const handleTypeDropdownChange = (e) => {
    const selectedType = e.target.value;
    setSelectedTypeDropdown(selectedType);
    filterBooks(searchTerm, selectedTypes, selectedType);
  };

  const filterBooks = (searchTerm, selectedTypes, selectedTypeDropdown) => {
    const filtered = booksData.filter(
      (book) =>
        book.name.toLowerCase().includes(searchTerm) &&
        (selectedTypes.length === 0 || selectedTypes.includes(book.type)) &&
        (selectedTypeDropdown === "" || book.type === selectedTypeDropdown)
    );
    setFilteredBooks(filtered);
  };

  const handleBookClick = (book) => {
    if (book.price > 0) {
      navigate("/buy", { state: { book } });
    } else {
      navigate("/readbook", { state: { book } });
    }
  };

  const handleSaveBook = (book) => {
    if (savedBooks.some((savedBook) => savedBook.id === book.id)) {
      alert(`${book.name} is already saved.`);
      return;
    }
    setSavedBooks((prevBooks) => [...prevBooks, book]);
  };

  const handleReportBook = (book) => {
    setSelectedBook(book);
    setReportDialogOpen(true); 
  };

  const handleReportReasonChange = (e) => {
    const { name, checked } = e.target;
    setReportReasons((prevReasons) => ({
      ...prevReasons,
      [name]: checked,
    }));
  };

  const handleReportSubmit = () => {
    const reasons = Object.keys(reportReasons).filter(
      (key) => reportReasons[key]
    );
    if (reasons.length === 0) {
      alert("Please select at least one reason for reporting.");
      return;
    }

    setReportedBooks([...reportedBooks, selectedBook.id]);
    setReportSubmitted(true);
    setReportDialogOpen(false); 
    setTimeout(() => {
      setReportSubmitted(false); 
    }, 3000);
  };

  const handleExitReportDialog = () => {
    setReportDialogOpen(false);
    setReportReasons({
      religious: false,
      political: false,
      violence: false,
      foulLanguage: false,
      insulting: false,
      pornographic: false,
    });
  };

  const handleViewSavedBooks = () => {
    navigate("/booksaved", { state: { savedBooks } });
  };

  return (
    <div style={{ position: "absolute", top: "0%" , overflowX: "hidden"}}>
      <div
        style={{ background: "#f9f9f9", minHeight: "100vh", padding: "20px" }}
      >
        <div style={{ display: "flex", maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              width: "200px",
              padding: "10px",
              borderRight: "1px solid #ccc",
              position: "fixed",
              height: "100vh",
              background: "#fff",
            }}
          >
            <h2>Filter by Type</h2>
            <div className="checkbox-container">
              <input
                type="checkbox"
                value="economics"
                onChange={handleTypeChange}
              />
              <label>Economics</label>
            </div>
            <br />
            <div className="checkbox-container">
              <input
                type="checkbox"
                value="policy"
                onChange={handleTypeChange}
              />
              <label>Policy</label>
            </div>
            <br />
            <div className="checkbox-container">
              <input
                type="checkbox"
                value="religions"
                onChange={handleTypeChange}
              />
              <label>Religions</label>
            </div>
            <br />
          </div>

          <div style={{ padding: "10px", flex: 1, marginLeft: "260px" }}>
            <h1>Book Search</h1>
            <input
              type="text"
              placeholder="Search for a book by name..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <select
              value={selectedTypeDropdown}
              onChange={handleTypeDropdownChange}
              className="custom-select"
              style={{ marginLeft: "10px" }}
            >
              <option value="">All Types</option>
              <option value="economics">Economics</option>
              <option value="policy">Policy</option>
              <option value="religions">Religions</option>
            </select>

            <div style={{ marginTop: "3%", display: "flex", flexWrap: "wrap" }}>
              {filteredBooks.length > 0 ? (
                filteredBooks.map((book) => (
                  <div
                    key={book.id}
                    style={{
                      width: "25%",
                      margin: "10px",
                      textAlign: "center",
                      background: "#fff",
                      padding: "10px",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      position: "relative",
                    }}
                  >
                    <img
                      src={book.img}
                      alt={book.name}
                      style={{ width: "100px", height: "150px" }}
                      onClick={() => handleBookClick(book)}
                    />
                    <p>{book.name}</p>
                    {book.price > 0 ? (
                      <p style={{ color: "red" }}>Not Free - ${book.price}</p>
                    ) : (
                      <p>Free</p>
                    )}

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "10px",
                      }}
                    >
                      <FaHeart
                        style={{
                          color: savedBooks.some((b) => b.id === book.id)
                            ? "gray"
                            : "red",
                          cursor: savedBooks.some((b) => b.id === book.id)
                            ? "not-allowed"
                            : "pointer",
                          marginRight: "10px",
                        }}
                        onClick={() =>
                          savedBooks.some((b) => b.id === book.id)
                            ? null
                            : handleSaveBook(book)
                        }
                      />
                      <FaExclamationCircle
                        style={{
                          color: reportedBooks.includes(book.id)
                            ? "gray"
                            : "black",
                          cursor: reportedBooks.includes(book.id)
                            ? "not-allowed"
                            : "pointer",
                        }}
                        onClick={() => handleReportBook(book)}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <p>No books found.</p>
              )}
            </div>

            <div style={{ marginTop: "20px" }}>
              <button onClick={handleViewSavedBooks}>View Saved Books</button>
            </div>
          </div>
        </div>

        {reportDialogOpen && (
          <div
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              background: "rgba(0, 0, 0, 0.7)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                maxWidth: "400px",
                width: "100%",
              }}
            >
              <h3>Report Book</h3>
              <p>Reason for Reporting "{selectedBook?.name}"</p>

              <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-around" }}>
              <label>Contains religious incitement</label>
                <input
                  type="checkbox"
                  name="religious"
                  checked={reportReasons.religious}
                  onChange={handleReportReasonChange}
                  style={{width: "50px"}}
                />
              </div>
              <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-around" }}>
              <label>Contains political incitement</label>
                <input
                  type="checkbox"
                  name="political"
                  checked={reportReasons.political}
                  onChange={handleReportReasonChange}
                  style={{width: "50px"}}
                />
              </div>
              <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-around" }}>
              <label>Contains violence</label>
                <input
                  type="checkbox"
                  name="violence"
                  checked={reportReasons.violence}
                  onChange={handleReportReasonChange}
                  style={{width: "50px"}}
                />
              </div>
              <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-around" }}>
              <label>Contains foul language</label>
                <input
                  type="checkbox"
                  name="foulLanguage"
                  checked={reportReasons.foulLanguage}
                  onChange={handleReportReasonChange}
                  style={{width: "50px"}}
                />
              </div>
              <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-around" }}>
              <label>Contains insulting words</label>
                <input
                  type="checkbox"
                  name="insulting"
                  checked={reportReasons.insulting}
                  onChange={handleReportReasonChange}
                  style={{width: "50px"}}
                />
              </div>
              <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-around" }}>
              <label>Contains pornographic words</label>
                <input
                  type="checkbox"
                  name="pornographic"
                  checked={reportReasons.pornographic}
                  onChange={handleReportReasonChange}
                  style={{width: "50px"}}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button onClick={handleExitReportDialog}>Cancel</button>
                <button onClick={handleReportSubmit}>Submit</button>
              </div>
            </div>
          </div>
        )}
        

        {reportSubmitted && (
          <div
            style={{
              position: "fixed",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              padding: "10px 20px",
              background: "#28a745",
              color: "#fff",
              borderRadius: "5px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            Your report has been submitted successfully!
          </div>
        )}
      </div>
    </div>
  );
}
