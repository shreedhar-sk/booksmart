import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar"
import Footer from "../Components/footer"
import "../index.css";

function Admin() {
  const [option, setOption] = useState("add");
  const [searchTerm, setSearchTerm] = useState("");
  const [addedBooks, setAddedBooks] = useState([]);
  const [foundBooks, setFoundBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    Image: "",
    Name: "",
    Author: "",
    Genre: "",
    Public: ""
  });
  const [updateData, setUpdateData] = useState({
    name: "",
    newData: {
      Image: "",
      Name: "",
      Author: "",
      Genre: "",
      Public: ""
    }
  });

  useEffect(() => {
    fetchAddedBooks();
  }, []);

  const handleOptionChange = (selectedOption) => {
    setOption(selectedOption);
    setSearchTerm("");
    setFoundBooks([]);
  };

  const handleSearch = async () => {
    if (option === "delete" || option === "update") {
      if (searchTerm.trim() === "") {
        alert("Please enter a book to search.");
        return;
      }
      // Simulated search results
      const data = [
        {
          Name: "Book 1",
          Author: "Author 1",
          Genre: "Genre 1",
          Public: "2023-10-24",
          Image: "image-link-1"
        },
        {
          Name: "Book 2",
          Author: "Author 2",
          Genre: "Genre 2",
          Public: "2023-10-25",
          Image: "image-link-2"
        },
        {
          Name: "Book 3",
          Author: "Author 3",
          Genre: "Genre 3",
          Public: "2023-10-26",
          Image: "image-link-3"
        }
      ];
      const filtered = data.filter(
        (book) =>
          book.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.Author.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFoundBooks(filtered);
    }
  };

  const handleAddBook = (event) => {
    event.preventDefault();
    const currentDate = new Date().toISOString().split("T")[0];
    if (newBook.Public > currentDate) {
      alert("Publication date cannot be greater than today's date.");
      return;
    }
    // Simulated book addition
    const book = { ...newBook, Image: newBook.Image || "default-image" };
    setAddedBooks([...addedBooks, book]);
    setNewBook({
      Image: "",
      Name: "",
      Author: "",
      Genre: "",
      Public: ""
    });
    alert("Book added");
  };

  const fetchAddedBooks = () => {
    // Simulated data
    const data = [
      {
        Name: "Book 1",
        Author: "Author 1",
        Genre: "Genre 1",
        Public: "2023-10-24",
        Image: "image-link-1"
      },
      {
        Name: "Book 2",
        Author: "Author 2",
        Genre: "Genre 2",
        Public: "2023-10-25",
        Image: "image-link-2"
      },
      {
        Name: "Book 3",
        Author: "Author 3",
        Genre: "Genre 3",
        Public: "2023-10-26",
        Image: "image-link-3"
      }
    ];
    setAddedBooks(data);
  };

  const handleDeleteBook = (bookName) => {
    // Simulated book deletion
    const updatedBooks = addedBooks.filter((b) => b.Name !== bookName);
    setAddedBooks(updatedBooks);
    setFoundBooks([]);
    alert("Book deleted");
  };

  const handleUpdateBook = (book) => {
    // Simulated book update
    const updatedBooks = addedBooks.map((b) => {
      if (b.Name === book.Name) {
        return { ...b, ...updateData.newData };
      }
      return b;
    });
    setAddedBooks(updatedBooks);
    setFoundBooks([]);
    setUpdateData({
      name: "",
      newData: {
        Image: "",
        Name: "",
        Author: "",
        Genre: "",
        Public: ""
      }
    });
    alert("Book updated");
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="border border-5 p-4 mb-4 bg-warning-subtle">
          <h1 className="mb-4 display-8 fw-bold text-primary">
            Library Manager Hub: Add, Delete, or Update Books
          </h1>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">Options</div>
                <div className="card-body d-flex flex-column align-items-center">
                  <div className="card-buttons mb-3">
                    <button
                      className={`btn ${
                        option === "add" ? "btn-success" : "btn-danger"
                      }`}
                      onClick={() => handleOptionChange("add")}
                    >
                      Add Book
                    </button>
                    <button
                      className={`btn ${
                        option === "delete" ? "btn-success" : "btn-danger"
                      }`}
                      onClick={() => handleOptionChange("delete")}
                    >
                      Delete Book
                    </button>
                    <button
                      className={`btn ${
                        option === "update" ? "btn-success" : "btn-danger"
                      }`}
                      onClick={() => handleOptionChange("update")}
                    >
                      Update Book
                    </button>
                  </div>
                  <div className="book-card">
                    <img
                      src="https://images.pexels.com/photos/1261180/pexels-photo-1261180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Book Options"
                      className="img-fluid"
                      style={{ maxWidth: "100%", maxHeight: "500px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="border border-5 p-4 bg-warning">
                <div className="card">
                  <div className="card-header">
                    {option === "add" && "Add Book"}
                    {option === "delete" && "Delete Book"}
                    {option === "update" && "Update Book"}
                  </div>
                  <div className="card-body bg-dark text-white">
                    {option === "add" && (
                      <div>
                        <h2>Add Book</h2>
                        <form onSubmit={handleAddBook}>
                          <div className="mb-3">
                            <label htmlFor="imageLink" className="form-label">
                              Image Link
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="imageLink"
                              required
                              value={newBook.Image}
                              name="Image"
                              onChange={(e) =>
                                setNewBook({
                                  ...newBook,
                                  Image: e.target.value
                                })
                              }
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="title" className="form-label">
                              Title
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="title"
                              required
                              value={newBook.Name}
                              name="Name"
                              onChange={(e) =>
                                setNewBook({ ...newBook, Name: e.target.value })
                              }
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="author" className="form-label">
                              Author
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="author"
                              required
                              value={newBook.Author}
                              name="Author"
                              onChange={(e) =>
                                setNewBook({
                                  ...newBook,
                                  Author: e.target.value
                                })
                              }
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="genre" className="form-label">
                              Genre
                            </label>
                            <select
                              className="form-control"
                              id="genre"
                              required
                              value={newBook.Genre}
                              name="Genre"
                              onChange={(e) =>
                                setNewBook({
                                  ...newBook,
                                  Genre: e.target.value
                                })
                              }
                            >
                              <option value="">Select Genre</option>
                              <option value="Mystery">Mystery</option>
                              <option value="Science Fiction">
                                Science Fiction
                              </option>
                              <option value="Romance">Romance</option>
                              <option value="Fantasy">Fantasy</option>
                              {/* Add more genre options as needed */}
                            </select>
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="publicationDate"
                              className="form-label"
                            >
                              Publication Date
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              id="publicationDate"
                              required
                              value={newBook.Public}
                              name="Public"
                              onChange={(e) =>
                                setNewBook({
                                  ...newBook,
                                  Public: e.target.value
                                })
                              }
                            />
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Add Book
                          </button>
                        </form>
                      </div>
                    )}
                    {option === "delete" && (
                      <div>
                        <h2>Delete Book</h2>
                        <input
                          type="text"
                          className="form-control mb-3"
                          placeholder="Search by title or author"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button
                          className="btn btn-outline-primary mb-3"
                          onClick={handleSearch}
                        >
                          Search
                        </button>
                        <ul className="list-group">
                          {foundBooks.map((book, index) => (
                            <li
                              key={index}
                              className="list-group-item d-flex justify-content-between align-items-center"
                            >
                              <div>
                                <strong>Title:</strong> {book.Name},{" "}
                                <strong>Author:</strong> {book.Author},{" "}
                                <strong>Genre:</strong> {book.Genre},{" "}
                                <strong>Publication Date:</strong> {book.Public}
                              </div>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDeleteBook(book.Name)}
                              >
                                Delete
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {option === "update" && (
                      <div>
                        <h2>Update Book</h2>
                        <input
                          type="text"
                          className="form-control mb-3"
                          placeholder="Search by title or author"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button
                          className="btn btn-outline-primary mb-3"
                          onClick={handleSearch}
                        >
                          Search
                        </button>
                        <ul className="list-group">
                          {foundBooks.map((book, index) => (
                            <li key={index} className="list-group-item">
                              <div>
                                <strong>Title:</strong> {book.Name},{" "}
                                <strong>Author:</strong> {book.Author},{" "}
                                <strong>Genre:</strong> {book.Genre},{" "}
                                <strong>Publication Date:</strong> {book.Public}
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor={`update-image-${index}`}
                                  className="form-label"
                                >
                                  New Image Link
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id={`update-image-${index}`}
                                  placeholder="New Image Link"
                                  value={updateData.newData.Image}
                                  onChange={(e) =>
                                    setUpdateData({
                                      ...updateData,
                                      newData: {
                                        ...updateData.newData,
                                        Image: e.target.value
                                      }
                                    })
                                  }
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor={`update-title-${index}`}
                                  className="form-label"
                                >
                                  New Title
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id={`update-title-${index}`}
                                  placeholder="New Title"
                                  value={updateData.newData.Name}
                                  onChange={(e) =>
                                    setUpdateData({
                                      ...updateData,
                                      newData: {
                                        ...updateData.newData,
                                        Name: e.target.value
                                      }
                                    })
                                  }
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor={`update-author-${index}`}
                                  className="form-label"
                                >
                                  New Author
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id={`update-author-${index}`}
                                  placeholder="New Author"
                                  value={updateData.newData.Author}
                                  onChange={(e) =>
                                    setUpdateData({
                                      ...updateData,
                                      newData: {
                                        ...updateData.newData,
                                        Author: e.target.value
                                      }
                                    })
                                  }
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor={`update-genre-${index}`}
                                  className="form-label"
                                >
                                  New Genre
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id={`update-genre-${index}`}
                                  placeholder="New Genre"
                                  value={updateData.newData.Genre}
                                  onChange={(e) =>
                                    setUpdateData({
                                      ...updateData,
                                      newData: {
                                        ...updateData.newData,
                                        Genre: e.target.value
                                      }
                                    })
                                  }
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor={`update-public-${index}`}
                                  className="form-label"
                                >
                                  New Publication Date
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id={`update-public-${index}`}
                                  placeholder="New Publication Date"
                                  value={updateData.newData.Public}
                                  onChange={(e) =>
                                    setUpdateData({
                                      ...updateData,
                                      newData: {
                                        ...updateData.newData,
                                        Public: e.target.value
                                      }
                                    })
                                  }
                                />
                              </div>
                              <button
                                className="btn btn-success btn-sm"
                                onClick={() => handleUpdateBook(book)}
                              >
                                Update
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-5 mt-3 p-4 bg-dark">
              <div className="card mt-4">
                <div className="card-body bg-warning">
                  <h2>Books Available</h2>
                  <div className="row">
                    {addedBooks.map((book, index) => (
                      <div key={index} className="col-md-3 mb-4">
                        <div className="card book-card">
                          <img
                            src={book.Image}
                            alt={`Cover of ${book.Name}`}
                            className="card-img-top"
                            style={{ height: "250px" }}
                          />
                          <div className="card-body">
                            <h5 className="card-title">{book.Name}</h5>
                            <p className="card-text">
                              <strong>Author:</strong> {book.Author}
                            </p>
                            <p className="card-text">
                              <strong>Genre:</strong> {book.Genre}
                            </p>
                            <p className="card-text">
                              <strong>Publication Date:</strong> {book.Public}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Admin;
