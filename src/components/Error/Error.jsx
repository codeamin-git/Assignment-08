import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center space-y-6">
                <h1 className="text-8xl font-bold">Oops!!!</h1>
                <button className="btn btn-success text-white"><Link to="/">back to home</Link></button>
            </div>
        </div>
    );
};

export default Error;