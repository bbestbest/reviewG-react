import React from 'react'
import { Link } from "react-router-dom";
import './index.css';

function Body({children}) {
    return (
    <>
        <div className="body-container">
            <div className="frontCover-container">
                <div className="item-frontCover">{children}</div>
            </div>
        </div>
    </>
    )
}
export default Body;