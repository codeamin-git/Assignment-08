import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaAngleDown } from "react-icons/fa6";
import 'react-tabs/style/react-tabs.css';
import { getReadBook, getWishList } from '../utility/localSotrage';
import ReadList from '../components/ReadList/ReadList';
import WishList from '../components/WishList/WishList';
import { useEffect, useState } from 'react';
const ListedBooks = () => {
    const [books, setBooks] = useState([])
    const [readBooks, setReadBooks] = useState([])
    const [wishListBooks, setWishListBooks] = useState([])

    useEffect(() => {
        fetch('/books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    useEffect(() => {
        console.log(books);
        
        const storedReadBooks = getReadBook().map(id => parseInt(id));

        const storedWishListBooks = getWishList().map(id => parseInt(id));

        const markedReadBooks = books.filter(book => storedReadBooks.includes(book.bookId));
        const markedWishListBooks = books.filter(book => storedWishListBooks.includes(book.bookId))
        setReadBooks(markedReadBooks);
        setWishListBooks(markedWishListBooks)
    }, [books])

    console.log(readBooks);
    console.log(wishListBooks);
    return (
        <div className='space-y-20'>
            <div className='text-center'>
                <h1 className='bg-[#1313130D] p-6 rounded-2xl text-3xl font-bold'>Books</h1>
                <div className='mt-4'>
                    <details className="dropdown">
                        <summary className="m-1 btn bg-[#23BE0A] text-white">Sort By<FaAngleDown /></summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </details>
                </div>
            </div>



            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <div className='space-y-4'>
                        {
                            readBooks.map(book => <ReadList key={book.bookId} book={book}></ReadList>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        {
                            wishListBooks.map(book => <WishList key={book.bookId} book={book}></WishList>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;