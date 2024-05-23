import React from 'react';

interface CourseCardProps {
    id: number;
    image: string;
    title: string;
    desc: string;
    price: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ id, image, title, desc, price }) => {
    return (
        <div className="w-80 p-2 mx-2">
            <div className="bg-white p-4 rounded shadow-md h-60  overflow-hidden cursor-pointer  transition duration-300 hover:bg-sky-600 hover:translate-y-2 hover:text-gray-200 flex justify-start place-items-start flex-col">
                <img src={image} alt={title} className="w-72 h-32 rounded"/>
                <p>{title}</p>
                <p className="text-[14px]">{desc}</p>
                <div className="flex flex-row place-self-end justify-self-end h-5 w-10 align-middle items-center mx-4">
                    <p className="mx-2">{price}</p>
                    <img src="/images/solana.png" alt="" className="h-4 w-4"/>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;