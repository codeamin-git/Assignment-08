import PropTypes from 'prop-types'
import { IoStarOutline } from "react-icons/io5"; import { Link } from 'react-router-dom';
const Book = ({ book }) => {

    const { bookId, image, tags, bookName, author, category, rating } = book;

    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 shadow-xl md:p-6 border space-y-4">
                <figure className='p-4 rounded-2xl bg-[#F3F3F3]'><img src={image} alt="Book" /></figure>
                <div className="card-body">
                    <p className='flex justify-around'>
                        <span className='font-medium rounded-full text-[#23BE0A] bg-[#e6faec] px-4 py-2'>
                            {tags[0]}
                        </span>
                        <span className='font-medium rounded-full text-[#23BE0A] bg-[#e6faec] px-4 py-2'>
                            {tags[1]}
                        </span>
                    </p>
                    <h2 className="card-title font-secondary text-2xl font-bold">{bookName}</h2>
                    <p className='font-medium text-base'>By: {author}</p>
                    <hr />
                    <div className='flex justify-between items-center mt-4'>
                        <p>{category}</p>
                        <p className='flex justify-center items-center gap-2'>{rating}<IoStarOutline /></p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object
}

export default Book;