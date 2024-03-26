import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const Books = () => {

    const books = useLoaderData();
    // console.log(books);
    return (
        <div>
            <h2 className="text-4xl font-bold text-center">Books</h2>

            <div className="grid md:grid-cols-3 gap-6 mt-9">
                {
                    books.map(book => 
                    <Book 
                    key={book.bookId}
                    book={book}
                    ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;