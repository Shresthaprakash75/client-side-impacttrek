import * as React from "react"
import { Link } from "gatsby"

const Footer = () => {
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <Link to="/treks" className="nav-link px-2 text-body-secondary">Choose Trek</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/book-trek" className="nav-link px-2 text-body-secondary">Book Trek</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact-us" className="nav-link px-2 text-body-secondary">Contact Us</Link>
                    </li>

                </ul>
                <p className="text-center text-body-secondary">&copy; 2024 Impacttrek, Inc</p>
            </footer>
        </div>
    )
}

export default Footer