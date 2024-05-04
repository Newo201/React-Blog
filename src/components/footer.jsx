import React from "react"

function Footer() {
    return (
    <div className="container footer">
        <footer className="mt-5">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="./home.html" className="nav-link px-2 text-body-secondary">Home</a></li>
            <li className="nav-item"><a href="./about.html" className="nav-link px-2 text-body-secondary">About</a></li>
            <li className="nav-item"><a href="./blog.html" className="nav-link px-2 text-body-secondary">Blog</a></li>                  </ul>
        <p className="text-center text-body-secondary text-font">© 2024 Owen's Personal Portfolio</p>
        </footer>
    </div>
    )
}

export default Footer