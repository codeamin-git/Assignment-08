import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const bookDetails = useLoaderData()
    const { bookId } = useParams()
    const bookInfo = bookDetails.find(book => book.bookId === parseInt(bookId))
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = bookInfo;
    console.log(typeof (bookId), bookDetails, bookInfo);


    return (
        <div className="hero">
            <div className="flex items-center z-0 justify-evenly flex-col lg:flex-row border w-full space-y-6">
                <img src={image} className="max-w-sm rounded-2xl shadow-2xl w-full bg-base-200 md:p-12" />
                <div className="space-y-6">
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
                        <button className="btn  btn-outline px-6">Read</button>
                        <button className="btn btn-info">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;