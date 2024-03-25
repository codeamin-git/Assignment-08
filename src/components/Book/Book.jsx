import PropTypes from 'prop-types'
import { IoStarOutline } from "react-icons/io5";const Book = ({ book }) => {

    const { image, tags, bookName, author, category, rating } = book;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Book" /></figure>
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
                <div className='flex justify-between items-center'>
                    <p>{category}</p>
                    <p className='flex justify-center items-center gap-2'>{rating}<IoStarOutline /></p>
                </div>
            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object
}

export default Book;