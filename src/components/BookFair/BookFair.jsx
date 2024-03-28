import { useLoaderData } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";

const BookFair = () => {
    const books = useLoaderData();
    return (
        <div className="font-secondary">
            <div className="text-center space-y-4 mt-4">
                <h1 className="text-5xl font-semibold">Welcome to our Fair</h1>
                <p className="text-3xl">Explore our display and order Now!!</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
                {
                    books.map(book => (
                        <div key={book.bookId} className="card border rounded-2xl p-4 hover:animate-bounce hover:bg-[#c2e8b7]">
                            <div className="rounded-2xl bg-base-200 flex items-center justify-center">
                            <img src={book.image} alt="" className="p-4"/>
                            </div>
                            <div>
                                <h2 className="text-2xl font-medium">{book.bookName}</h2>
                                <p>Written by : <span className="font-bold">{book.author}</span></p>
                                <p className="flex">Price : <span className="font-extrabold text-xl">{book.totalPages}</span><BsCurrencyDollar className="text-xl"/></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BookFair;