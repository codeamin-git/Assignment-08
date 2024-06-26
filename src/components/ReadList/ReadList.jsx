import { SlLocationPin } from "react-icons/sl";
import { GoPeople } from "react-icons/go";
import { PiBookOpenTextThin } from "react-icons/pi";
import { Link, useParams } from "react-router-dom";
const ReadList = ({ book }) => {
    console.log(book);
    const {bookId, image, bookName, author, category, tags, totalPages, publisher, yearOfPublishing, rating } = book
    return (
        <div className="border rounded-2xl p-4">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                    <img src={image} className="max-w-sm rounded-2xl bg-base-200 p-6" />
                </div>
                <div className="md:w-full space-y-4">
                    <h1 className="text-2xl font-bold font-secondary">{bookName}</h1>
                    <p className="py-6">By : {author}</p>
                    <div className='flex md:gap-10 items-center flex-col md:flex-row'>
                        <p className="text-base font-bold">Tag</p>
                        <p className='font-medium rounded-full text-[#23BE0A] bg-[#e6faec] px-4 py-2'>
                            {tags[0]}
                        </p>
                        <p className='font-medium rounded-full text-[#23BE0A] bg-[#e6faec] px-4 py-2'>
                            {tags[1]}
                        </p>
                        <p className="flex items-center gap-2">
                            <SlLocationPin />Year of Publishing: {yearOfPublishing}
                        </p>
                    </div>

                    <div className="flex gap-6 text-[#13131399] text-base">
                        <p className="flex items-center gap-2">
                            <GoPeople /> Publisher: {publisher}
                        </p>
                        <p className="flex items-center gap-2">
                            <PiBookOpenTextThin />Page {totalPages}
                        </p>
                    </div>
                    <hr />
                    <div className="flex items-center gap-4 flex-col md:flex-row">
                        <button className="font-medium rounded-full text-[#328EFF] bg-[#328EFF26] px-4 py-2">Category: {category}</button>
                        <button className="font-medium rounded-full text-[#FFAC33] bg-[#FFAC3326] px-4 py-2">Rating: {rating}</button>
                        <Link to={`/bookDetails/${bookId}`}>
                            <button className="font-medium rounded-full text-white bg-[#23BE0A] px-4 py-2">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadList;