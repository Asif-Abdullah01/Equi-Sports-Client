import { Link, Navigate } from 'react-router-dom';
import b1 from '../assets/cricket-2511043_1920.jpg'
import b2 from '../assets/badminton-2108344_1920.jpg'
import b3 from '../assets/football-488714_1920.jpg'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full max-h-[550px]  rounded-b-xl">
                <div id="slide1" className="carousel-item relative w-full z-10">
                    <img
                        src={b3}
                        className="w-full h-auto object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
                        <a href="#slide3" className="btn btn-circle bg-transparent text-4xl text-white hover:text-gray-300">❮</a>
                        <button id="sportStore" className=" btn mt-4 border-none bg-green-600 text-white py-2 px-4 rounded hover:bg-green-800 transition-colors">
                            Sports Store
                        </button>
                        <Tooltip
                            anchorSelect="#sportStore"
                            content="Your All in one Sports Solution"
                        />

                        <a href="#slide2" className="btn btn-circle bg-transparent text-4xl text-white hover:text-gray-300">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={b2}
                        className="w-full h-auto object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle bg-transparent text-4xl text-white hover:text-gray-300">❮</a>
                        <button id="sportStore" className=" btn mt-4 border-none bg-green-600 text-white py-2 px-4 rounded hover:bg-green-800 transition-colors">
                            Sports Store
                        </button>
                        <Tooltip
                            anchorSelect="#sportStore"
                            content="Just One Click Away!"
                        />
                        <a href="#slide3" className="btn btn-circle bg-transparent text-4xl text-white hover:text-gray-300">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={b1}
                        className="w-full h-auto object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle bg-transparent text-4xl text-white hover:text-gray-300">❮</a>
                        <button id="sportStore" className=" btn mt-4 border-none bg-green-600 text-white py-2 px-4 rounded hover:bg-green-800 transition-colors">
                            Sports Store
                        </button>
                        <Tooltip
                            anchorSelect="#sportStore"
                            content="Ensuring the Best Goods"
                        />
                        <a href="#slide1" className="btn btn-circle bg-transparent text-4xl text-white hover:text-gray-300">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Slider;