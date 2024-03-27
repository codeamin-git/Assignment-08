import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadBook } from "../utility/localSotrage";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';

const PagesToRead = () => {
    const pagesToRead = useLoaderData();

    const [barData, setBarData] = useState([]);

    useEffect(() => {
        const readBookPages = getReadBook().map(id => parseInt(id));

        const filteredBooks = pagesToRead.filter(book => readBookPages.includes(book.bookId));

        const barData = filteredBooks.map(book => ({
            name: book.bookName,
            pages: book.totalPages
        }));

        setBarData(barData);
    }, [pagesToRead]);

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        const getPath = () => {
            return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
            ${x + width / 2}, ${y}
            C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
            Z`;
        };

        return <path d={getPath()} stroke="none" fill={fill} />;
    };

    const chartWidth = window.innerWidth * 0.8;
    const chartHeight = window.innerHeight * 0.8;

    return (
        <div>
            <div className="w-full flex items-center justify-center bg-[#0D0D0D08] rounded-2xl">
                <BarChart
                    width={chartWidth}
                    height={chartHeight}
                    data={barData}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {barData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </div>
        </div>
    );
};

export default PagesToRead;
