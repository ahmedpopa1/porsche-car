import { useState } from "react";
import { FaStar } from 'react-icons/fa';

export default function Rate(ra){
    console.log()
    const [rating, setRating] = useState(ra.r);
    const [hover, setHover] = useState("");
    return(
        <div className="rating">
            {[...Array(5)].map((Star, index) =>{
                let currentRate = index + 1;
                return(
                    <label>
                        <input type="radio" name="rating" value={currentRate} onClick={() => setRating(currentRate)}/>
                        <FaStar className="star" size={30} color={currentRate <= (hover || rating)? "#ffc107" : "black"} 
                        onMouseEnter={() => setHover(currentRate)} onMouseLeave={() => setHover(null)}/>
                    </label>
                );
            })}
        </div>
    )
}