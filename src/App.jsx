import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";

function App() {
  console.log(fantasy[0]);
  return (
    <>
      <MyNav />

      <Welcome />
      <BookList books={fantasy} />

      <MyFooter />
    </>
  );
}

export default App;
