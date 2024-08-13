import React, { useEffect } from "react";
import './loader.css'
import { preLoaderAnim } from "../animation/index"
const Loader = () => {
    useEffect(() => {
        preLoaderAnim();
    }, []);
    return (
        <div className="preloader">
            <div className="texts-container">
                <span>Code,</span>
                <span>Eat,</span>
                <span>Sleep.</span>
            </div>
        </div>
    );
};

export default Loader;