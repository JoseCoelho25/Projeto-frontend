import React from 'react'
import CarOne from "../imgs/newpic2.jpg"
import {Link} from "react-router-dom";

function Card() {
  return (
    <div>
   


	<div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <Link to="/" className="" >
                  <img src={CarOne} alt="card" className="rounded-t-lg p-8" />
                  </Link>
			<div className="px-5 pb-5">
				<Link to="/">
					<h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">Apple Watch Series 7
						GPS, Aluminium Case, Starlight Sport</h3>
				</Link>
				
				<div className="flex items-center justify-between">
					<span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
					<Link to="/" 
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
						to cart</Link>
				</div>
			</div>
	</div>

</div>
  )
}

export default Card