import { useLoaderData } from "react-router-dom";

const BestSeller = () => {
    const books = useLoaderData()
    return (
        <div>
            <h1>this is best seller</h1>
        </div>
    );
};

export default BestSeller;