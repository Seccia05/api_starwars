import './index.css';
import React from "react";

function Scuola(props) {

    return (
        <div>
            <h1 className="text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Benvenuti
                a {' '}
                <mark
                    className="px-2 text-white bg-gradient-to-br from-pink-500 to-orange-400 dark:from-green-400 dark:to-blue-600 rounded-2xl">
                    {props.nomescuola}
                </mark>
            </h1>
            <br/>
            <br/>
            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4">
                <div>
                    <img className="h-auto mx-auto max-w-full md:max-w-2xl rounded-lg shadow-xl dark:shadow-gray-800"
                         src={props.urlimg} alt="foto_scuola"/>
                </div>
                <div>
                    <br/>
                    <p className="text-gray-500 dark:text-gray-400">
                        {props.txt1}
                    </p>
                    <blockquote
                        className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
                        <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">{props.txt2}</p>
                    </blockquote>
                </div>
            </div>
        </div>

    );
}

export default Scuola;
