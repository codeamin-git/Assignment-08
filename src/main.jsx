import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Error from './components/Error/Error';
import BookDetails from './components/BookDetails/BookDetails';
import Home from './pages/Home';
import ListedBooks from './pages/ListedBooks';
import PagesToRead from './pages/PagesToRead';
import BookFair from './components/BookFair/BookFair';
import BestSeller from './components/BestSeller/BestSeller';
import BestSelling from './components/BestSeller/BestSeller';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/books.json')
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: ()=> fetch('/books.json')
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>,
        loader: ()=> fetch('/books.json')
      },
      {
        path: '/bookDetails/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch(`/books.json`)
      },
      {
        path: "/bookFair",
        element: <BookFair></BookFair>,
        loader: ()=> fetch('/books.json')
      },
      {
        path: "/bestSelling",
        element: <BestSelling></BestSelling>,
        loader: ()=> fetch('/books.json')
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
