import * as React from "react"
import { Link } from "gatsby"

const Header = () => {
    return (
        <>
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    {/* logo : impacttrek */}
                    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span className="fs-4">
                            <svg width="152" height="40" viewBox="0 0 472 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_47_12)">
                                    <path d="M4 64V128H236H468V64V-6.67572e-06H236H4V64ZM464 64V124H235.333H6.66667V64V3.99999H235.333H464V64Z" fill="black" />
                                    <path d="M16 65.3334V114.667H144.667H273.333V65.3334V16.0001H144.667H16V65.3334ZM205.2 46.1334C208.133 47.3334 211.467 49.6001 212.533 51.3334C217.067 58.1334 213.733 59.6001 208 53.3334C205.067 50.1334 203.2 49.3334 198.667 49.3334C186.4 49.3334 180.667 63.4667 189.333 72.2667C193.067 76.0001 194.133 76.2667 199.733 75.6001C204.267 75.0667 206.667 74.0001 208.667 71.4667C210.133 69.6001 212.533 68.0001 213.733 68.0001C216 68.0001 216 68.2667 213.867 71.8667C210.667 77.3334 205.333 80.0001 197.467 80.0001C191.6 80.0001 190.133 79.4667 186.267 75.4667C176.667 66.0001 180.267 49.0667 192.533 45.4667C198.4 43.7334 199.333 43.7334 205.2 46.1334ZM45.3333 62.6667C45.3333 77.2001 45.0667 80.0001 43.3333 80.0001C41.6 80.0001 41.3333 77.2001 41.3333 62.6667C41.3333 48.1334 41.6 45.3334 43.3333 45.3334C45.0667 45.3334 45.3333 48.1334 45.3333 62.6667ZM70.4 55.4667L77.0667 65.6001L83.8667 55.4667C93.7333 40.9334 94.6667 41.6001 94.6667 62.6667C94.6667 76.9334 94.2667 80.0001 92.6667 80.0001C91.2 80.0001 90.6667 77.3334 90.4 67.0667L90 54.1334L84.6667 62.4001C81.7333 66.9334 78.4 70.6667 77.3333 70.6667C76.2667 70.6667 72.9333 66.9334 70 62.4001L64.6667 54.1334L64.2667 67.0667C64 77.3334 63.4667 80.0001 62 80.0001C60.4 80.0001 60 76.9334 60 62.6667C60 48.9334 60.4 45.3334 61.8667 45.3334C62.8 45.3334 66.6667 49.8667 70.4 55.4667ZM130 48.6667C132.267 50.8001 133.333 53.3334 133.333 56.6667C133.333 64.0001 128.667 68.0001 120 68.0001H113.333V74.0001C113.333 78.4001 112.8 80.0001 111.333 80.0001C109.6 80.0001 109.333 77.2001 109.333 62.6667V45.3334H118C125.6 45.3334 127.2 45.7334 130 48.6667ZM166.133 62.9334C172.133 77.6001 172.8 80.0001 170.667 80.0001C169.333 80.0001 167.6 78.4001 166.667 76.0001C165.067 72.1334 164.667 72.0001 156.4 72.0001C148.133 72.0001 147.867 72.1334 146.533 76.0001C145.6 78.5334 144.133 80.0001 142.667 80.0001C140 80.0001 139.6 81.4667 152.8 49.6001C156 41.8667 158.4 44.4001 166.133 62.9334ZM252 47.3334C252 48.8001 250.4 49.3334 246 49.3334H240V64.6667C240 77.4667 239.6 80.0001 238 80.0001C236.4 80.0001 236 77.4667 236 64.6667V49.3334H230C225.6 49.3334 224 48.8001 224 47.3334C224 45.7334 226.4 45.3334 238 45.3334C249.6 45.3334 252 45.7334 252 47.3334Z" fill="black" />
                                    <path d="M113.333 56.8V64.1333L119.6 63.7333C124.8 63.4666 126.267 62.6666 127.867 59.8666C129.6 56.6666 129.6 56 127.6 52.8C125.6 49.8666 124.267 49.3333 119.333 49.3333H113.333V56.8Z" fill="black" />
                                    <path d="M153.6 58.5333C152 62.5333 150.667 66.2667 150.667 66.8C150.667 67.4667 153.333 68 156.667 68C163.6 68 163.733 67.4667 159.467 58.1333L156.533 51.4667L153.6 58.5333Z" fill="black" />
                                    <path d="M286.667 51.3334C286.667 55.8667 286.8 56.0001 292 56.0001H297.333V69.3334V82.6667H302.667H308V69.3334V56.0001H313.333C318.533 56.0001 318.667 55.8667 318.667 51.3334V46.6667H302.667H286.667V51.3334Z" fill="black" />
                                    <path d="M324 64.6667V82.6667H329.333H334.667V77.3334C334.667 73.4667 335.2 72.0001 336.667 72.0001C337.733 72.0001 339.867 74.4001 341.333 77.3334C343.867 82.4001 344.4 82.6667 350.133 82.6667H356.267L352.8 76.6667L349.2 70.8001L352 68.0001C354.667 65.3334 355.6 57.4667 353.867 52.6667C352.267 48.6667 345.867 46.6667 334.667 46.6667H324V64.6667ZM343.2 56.8001C346.4 59.8667 343.733 64.0001 338.667 64.0001C334.933 64.0001 334.667 63.6001 334.667 59.3334C334.667 55.3334 335.067 54.6667 337.867 54.6667C339.733 54.6667 342.133 55.6001 343.2 56.8001Z" fill="black" />
                                    <path d="M361.333 64.6667V82.6667H374H386.667V78.8001C386.667 74.9334 386.4 74.8001 379.733 74.4001C373.6 74.0001 372.667 73.6001 372.267 70.9334C371.867 68.2667 372.267 68.0001 378.533 68.0001C385.2 68.0001 385.333 67.8667 385.333 64.0001C385.333 60.1334 385.2 60.0001 378.667 60.0001C372.933 60.0001 372 59.6001 372 57.3334C372 54.9334 372.933 54.6667 379.333 54.6667C386.533 54.6667 386.667 54.6667 386.667 50.6667V46.6667H374H361.333V64.6667Z" fill="black" />
                                    <path d="M393.333 64.6667V82.6667H398.667H404V76.0001C404 70.4001 404.4 69.3334 406.4 69.3334C408 69.3334 409.867 71.6001 412 76.0001C415.067 82.5334 415.333 82.6667 420.933 82.6667C424.133 82.6667 426.667 82.2667 426.667 81.8667C426.667 81.4667 424.8 77.4667 422.533 73.2001L418.267 65.3334L421.867 57.2001C423.733 52.8001 425.333 48.5334 425.333 47.8667C425.333 47.2001 423.067 46.6667 420.133 46.6667C415.333 46.6667 414.933 46.9334 412.8 52.6667C411.467 56.0001 410 58.6667 409.333 58.6667C408.667 58.6667 407.333 59.0667 406.133 59.4667C404.4 60.1334 404 59.2001 404 53.4667V46.6667H398.667H393.333V64.6667Z" fill="black" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_47_12" x="0" y="0" width="472" height="136" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_47_12" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_47_12" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </span>
                    </Link>

                    {/* nav items */}
                    <ul className="nav nav-pills">
                        {/* <li className="nav-item"><a  className="nav-link active" aria-current="page">Home</a></li> */}
                        <li className="nav-item">
                            <Link to="/treks" className="nav-link">Choose Trek </Link>    
                        </li>
                        <li className="nav-item">
                            <Link to="/book-trek" className="nav-link">Book Trek</Link>    
                        </li>
                        <li className="nav-item">
                            <Link to="/contact-us" className="nav-link">Contact Us</Link>    
                        </li>
                        <li className="nav-item">
                            <Link to="/about-us" className="nav-link">About Us</Link>    
                        </li>
                    </ul>
                </header>
            </div>

        </>
    )
}

export default Header