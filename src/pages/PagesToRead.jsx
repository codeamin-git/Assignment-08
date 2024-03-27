import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadBook } from "../utility/localSotrage";

const PagesToRead = () => {
    const pagesToRead = useLoaderData()

    const [pages, setPages] = useState([]);
    useEffect(()=>{
        const readBookPages = getReadBook().map(id => parseInt(id));
        const barOfBooks = pagesToRead.filter(book => readBookPages.includes(book.bookId))
        setPages(barOfBooks)
        console.log(barOfBooks);
    }, [pagesToRead])

    return (
        <div>
            <h1>this is from pages to read: {pagesToRead.length}</h1>
        </div>
    );
};

export default PagesToRead;
