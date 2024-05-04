import React from "react"

function Hero() {
    return (
        <div class="px-4 py-5 my-5 text-center">
            <img class="d-block mx-auto mb-4 profile" src="../images/Professional Headshot.jpg" alt="" width="229" height="185"/>
            <h1 class="display-5 fw-bold source-serif-4">Owen's Personal Portfolio</h1>
            <div class="col-lg-6 mx-auto">
            <p class="lead mb-4 text-font">Economist, Cricketer and Aspiring Programmer</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" onclick = "window.location.href  = './blog.html'" class="btn btn-primary btn-lg px-4 gap-3">Read Blogs</button>
            </div>
            </div>
        </div> 
    )
}

export default Hero