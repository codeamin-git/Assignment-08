
const ReadList = ({ book }) => {
    console.log(book);
    const { image, bookName, author, category, tags, totalPages, publisher, yearOfPublishing, rating } = book
    return (
        <div className="card border items-start">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="max-w-sm rounded-lg shadow-2xl bg-base-200 p-6" />
                <div>
                    <h1 className="text-2xl font-bold font-secondary">{bookName}</h1>
                    <p className="py-6">By : {author}</p>
                    <p className='flex justify-around'>
                        <span className='font-medium rounded-full text-[#23BE0A] bg-[#e6faec] px-4 py-2'>
                            {tags[0]}
                        </span>
                        <span className='font-medium rounded-full text-[#23BE0A] bg-[#e6faec] px-4 py-2'>
                            {tags[1]}
                        </span>
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ReadList;