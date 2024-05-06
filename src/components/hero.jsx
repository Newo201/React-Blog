import React from "react"
import { useNavigate } from "react-router-dom"

function Hero() {

    const navigate = useNavigate()

    function getBlogs() {
        navigate("/blog")
    }

    return (
        <div className="px-4 py-5 my-5 text-center">
            <img className="d-block mx-auto mb-4 profile" src={require("../images/Professional Headshot.jpg")} alt="" width="229" height="185"/>
            <h1 className="display-5 fw-bold source-serif-4">Owen's Personal Portfolio</h1>
            <div className="col-lg-6 mx-auto">
            <p className="lead mb-4 text-font">Economist, Cricketer and Aspiring Programmer</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button onClick = {getBlogs} type="button" className="btn btn-primary btn-lg px-4 gap-3">Read Blogs</button>
            </div>
            </div>
        </div> 
    )
}

export default Hero