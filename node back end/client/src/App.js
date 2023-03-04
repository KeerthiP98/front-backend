import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import NavBar from "./components/nav/navBar";
import Home from "./components/pages/home";
import Dashboard from  "./components/pages/Dashboard";
import GetBooks from "./components/pages/getBooks";
import UpdateBook from "./components/pages/updateBook";
import AddBook from "./components/pages/addBook";
import {Provider} from 'react-redux';
import {store} from './redux/store';

function App() {
  return (
    <>
    <Provider store={store}>
      <Router>

        <NavBar />
        <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/getBooks" element={<GetBooks />} />
        <Route exact path="/books/:id" element={<UpdateBook />} />
        <Route exact path="/addBook" element={<AddBook />} />
        
        </Routes>

      </Router>
      </Provider>
      
    </>
  );
}

export default App;
