import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200 rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse lg:gap-52">
                <img src="https://i.ibb.co/zZcdD4p/banner-book.png" className="max-w-sm rounded-lg w-full" />
                <div className="space-y-12">
                    <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>

                    <Link to='/listedBooks'>
                        <button className=" mt-4 btn text-white bg-[#23BE0A]">View The List</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;