import { useState } from "react";
import BookCard from "./components/BookCard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import SortBox from "./components/SortBox";
import BookLists from "./components/layouts/BookLists";
import Main from "./components/layouts/Main";
import SearchBoard from "./components/layouts/SearchBoard";
import { books } from "./data/books";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [bookLists, setBookLists] = useState([...books]);
  // This is a SortHandler function
  const handleSortBooks = (sortText) => {
    let sortAbleBooks = [];
    switch (sortText) {
      case "name_asc":
        sortAbleBooks = bookLists
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name));
        setBookLists(sortAbleBooks);
        break;
      case "name_desc":
        sortAbleBooks = bookLists
          .slice()
          .sort((a, b) => b.name.localeCompare(a.name));
        setBookLists(sortAbleBooks);
        break;
      case "year_asc":
        sortAbleBooks = bookLists.slice().sort((a, b) => {
          const oldest1 = Number(a.published.split(",")[1]);
          const oldest2 = Number(b.published.split(",")[1]);
          return oldest1 - oldest2;
        });
        setBookLists(sortAbleBooks);
        break;
      case "year_desc":
        sortAbleBooks = bookLists.slice().sort((a, b) => {
          const newest1 = Number(a.published.split(",")[1]);
          const newest2 = Number(b.published.split(",")[1]);
          return newest2 - newest1;
        });
        setBookLists(sortAbleBooks);
        break;
      case "favorite":
        sortAbleBooks = bookLists.filter((book) => book.isFavorite);
        setBookLists(
          sortAbleBooks.concat(bookLists.filter((book) => !book.isFavorite))
        );
        break;
      default:
        setBookLists(books);
        break;
    }
  };
  // set favorite book with handleFavorite function
  const handleFavorite = (bookId) => {
    setBookLists(
      bookLists.map((book) => {
        if (book.id === bookId) {
          return { ...book, isFavorite: !book.isFavorite };
        } else {
          return book;
        }
      })
    );
  };
  return (
    <>
      <Navbar />
      <Main>
        <SearchBoard>
          <SearchBox setSearchTerm={setSearchTerm} />
          <SortBox onSort={handleSortBooks} />
        </SearchBoard>
        <BookLists>
          {bookLists
            .filter((book) =>
              book.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((book) => (
              <BookCard key={book.id} book={book} onFavorite={handleFavorite} />
            ))}
        </BookLists>
      </Main>
      <Footer />
    </>
  );
}

export default App;
