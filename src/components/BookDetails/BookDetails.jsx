import { useLoaderData, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getReadBook, getWishList, saveReadBook, saveWishList } from "../../utility/localSotrage";

const BookDetails = () => {
    const bookDetails = useLoaderData()
    const { bookId } = useParams()
    const bookInfo = bookDetails.find(book => book.bookId === parseInt(bookId))
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = bookInfo;
    // console.log(typeof (bookId), bookDetails, bookInfo);

    const handleRead = () => {
        const isExist = saveReadBook(bookId)
        if(!isExist){
            toast.success("Marked this book as Read!")
        }
        else{
            toast.error("Book is already marked as Read!")
        }
    }

    const handleWishList = () => {
        const isRead = getReadBook().includes(bookId)
        const isExist = getWishList().includes(bookId)
        if(!isExist && !isRead){
            saveWishList(bookId)
            toast.success("Added to wishlist successfully")
        }
        else if (isRead){
            toast.error("Book is already marked as read")
        }
        else{
            toast.error("Book is already in the wishlist")
        }
    }

    return (
        <div className="hero">
            <div className="flex items-center flex-col lg:flex-row space-y-6 justify-around">
                <div className="">
                    <img src={image} className="max-w-sm rounded-2xl w-full bg-base-200 md:p-12 h-screen" />
                </div>
                <div className="space-y-6 md:w-1/2">
                    <h1 className="text-5xl font-bold font-secondary">{bookName}</h1>
                    <p className="py-6">By : {author}</p>
                    <hr />
                    <p>{category}</p>
                    <hr />
                    <p className="text-base"><span className="font-bold">Review : </span>{review}</p>
                    <p className="flex items-center gap-4"><span className="font-bold">Tag</span>
                        <span className='font-medium rounded-full text-[#23BE0A] bg-[#e6faec] px-4 py-2'>
                            {tags[0]}
                        </span>
                        <span className='font-medium rounded-full text-[#23BE0A] bg-[#e6faec] px-4 py-2'>
                            {tags[1]}
                        </span>
                    </p>
                    <hr />
                    <p className="flex items-center">
                        <span className="text-[#131313B3] md:w-40">Number of Pages:</span>
                        <span className="font-semibold">{totalPages}</span>
                    </p>
                    <p className="flex items-center">
                        <span className="text-[#131313B3] md:w-40">Publisher:</span>
                        <span className="font-semibold">{publisher}</span>
                    </p>
                    <p className="flex items-center">
                        <span className="text-[#131313B3] w-40">Year of Publishing:</span>
                        <span className="font-semibold">{yearOfPublishing}</span>
                    </p>
                    <p className="flex items-center">
                        <span className="text-[#131313B3] w-40">Rating:</span>
                        <span className="font-semibold">{rating}</span>
                    </p>
                    <div className="flex gap-10">
                        <button onClick={handleRead} className="btn  btn-outline px-6">Read</button>
                        <button onClick={handleWishList} className="btn btn-info">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;