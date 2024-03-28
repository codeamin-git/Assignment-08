import { useLoaderData } from 'react-router-dom';
import { Carousel } from 'flowbite-react';

const BestSelling = () => {
    const books = useLoaderData();

    return (
        <div className="h-96 font-secondary">
            <div className="text-center space-y-4 mt-4">
                <h1 className="text-5xl font-semibold">Here are some of our best selling books</h1>
                <p className="text-3xl">Start writing today <br /> Your book might be showcased here...</p>
            </div>
            <Carousel slideInterval={1000} className='bg-base-200 rounded-2xl mt-4'>
                {books.map(book => (
                    <div key={book.bookId} className=''>
                        <div className='flex items-center justify-center gap-4'>
                            <img src={book.image} alt="" />
                            <div>
                                <h2 className="text-4xl font-semibold">{book.bookName}</h2>
                                <p>Written by: <span className="font-medium text-2xl">{book.author}</span></p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default BestSelling;
