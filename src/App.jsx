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
  console.log(books);
  return (
    <>
      <Navbar />
      <Main>
        <SearchBoard>
          <SearchBox />
          <SortBox />
        </SearchBoard>
        <BookLists>
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </BookLists>
      </Main>
      <Footer />
    </>
  );
}

export default App;
