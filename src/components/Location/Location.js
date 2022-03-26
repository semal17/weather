import './Location.css';

function Location() {
    return (
        <section className="location">
            <div className="location__wrapper">
                <div className="location__wrapper-text">
                    <h2 className="location__title">Nearby</h2>
                    <p className="location__text">Location Services</p>
                </div>
                <ul className="location__list">
                    <li className="location__item">
                        <p className="location__temp">31&deg;</p>
                        <svg className="location__img" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_2_702)">
                                <path d="M35 28.125C37.6188 28.125 39.375 26.3688 39.375 23.75C39.375 21.1319 37.6188 18.125 35 18.125C35 11.5781 29.0469 6.875 22.5 6.875C16.7056 6.875 11.6575 10.7569 10.625 16.25C10.625 16.25 9.855 16.25 9.375 16.25C6.10125 16.25 3.75 19.2263 3.75 22.5C3.75 25.7737 6.10125 28.125 9.375 28.125H35Z" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M18.7494 7.345C17.3706 6.2675 15.6356 5.625 13.75 5.625C9.2625 5.625 5.625 9.2625 5.625 13.75C5.625 15.3606 6.06687 16.2369 6.875 17.5" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M3.75 13.75H0" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M13.75 3.75V0" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M6.25 6.25L2.5 2.5" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M15 30V32.5" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M15 35V37.5" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M17.5 31.25L16.25 32.5" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M13.75 35L12.5 36.25" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M17.5 36.25L16.25 35" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M13.75 32.5L12.5 31.25" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M18.75 33.75H16.25" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M13.75 33.75H11.25" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M27.5 31.25V33.75" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M27.5 36.25V38.75" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M30 32.5L28.75 33.75" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M26.25 36.25L25 37.5" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M30 37.5L28.75 36.25" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M26.25 33.75L25 32.5" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M31.25 35H28.75" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M26.25 35H23.75" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_702">
                                    <rect width="40" height="40" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="location__city">Columbia Falls</p>
                    </li>

                    <li className="location__item">
                        <p className="location__temp">31&deg;</p>
                        <svg className="location__img" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_2_702)">
                                <path d="M35 28.125C37.6188 28.125 39.375 26.3688 39.375 23.75C39.375 21.1319 37.6188 18.125 35 18.125C35 11.5781 29.0469 6.875 22.5 6.875C16.7056 6.875 11.6575 10.7569 10.625 16.25C10.625 16.25 9.855 16.25 9.375 16.25C6.10125 16.25 3.75 19.2263 3.75 22.5C3.75 25.7737 6.10125 28.125 9.375 28.125H35Z" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M18.7494 7.345C17.3706 6.2675 15.6356 5.625 13.75 5.625C9.2625 5.625 5.625 9.2625 5.625 13.75C5.625 15.3606 6.06687 16.2369 6.875 17.5" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M3.75 13.75H0" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M13.75 3.75V0" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M6.25 6.25L2.5 2.5" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M15 30V32.5" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M15 35V37.5" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M17.5 31.25L16.25 32.5" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M13.75 35L12.5 36.25" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M17.5 36.25L16.25 35" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M13.75 32.5L12.5 31.25" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M18.75 33.75H16.25" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M13.75 33.75H11.25" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M27.5 31.25V33.75" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M27.5 36.25V38.75" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M30 32.5L28.75 33.75" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M26.25 36.25L25 37.5" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M30 37.5L28.75 36.25" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M26.25 33.75L25 32.5" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M31.25 35H28.75" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M26.25 35H23.75" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_702">
                                    <rect width="40" height="40" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="location__city">Columbia Falls</p>
                    </li>
                </ul>
            </div>

            <div className="location__wrapper location__wrapper--margin-top">
                <div className="location__wrapper-text">
                    <h2 className="location__title">Contacts</h2>
                </div>
                <ul className="location__list">
                    <li className="location__item">
                        <p className="location__temp">31&deg;</p>
                        <svg className="location__img" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_2_702)">
                                <path d="M35 28.125C37.6188 28.125 39.375 26.3688 39.375 23.75C39.375 21.1319 37.6188 18.125 35 18.125C35 11.5781 29.0469 6.875 22.5 6.875C16.7056 6.875 11.6575 10.7569 10.625 16.25C10.625 16.25 9.855 16.25 9.375 16.25C6.10125 16.25 3.75 19.2263 3.75 22.5C3.75 25.7737 6.10125 28.125 9.375 28.125H35Z" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M18.7494 7.345C17.3706 6.2675 15.6356 5.625 13.75 5.625C9.2625 5.625 5.625 9.2625 5.625 13.75C5.625 15.3606 6.06687 16.2369 6.875 17.5" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M3.75 13.75H0" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M13.75 3.75V0" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M6.25 6.25L2.5 2.5" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M15 30V32.5" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M15 35V37.5" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M17.5 31.25L16.25 32.5" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M13.75 35L12.5 36.25" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M17.5 36.25L16.25 35" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M13.75 32.5L12.5 31.25" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M18.75 33.75H16.25" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M13.75 33.75H11.25" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M27.5 31.25V33.75" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M27.5 36.25V38.75" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M30 32.5L28.75 33.75" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M26.25 36.25L25 37.5" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M30 37.5L28.75 36.25" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M26.25 33.75L25 32.5" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M31.25 35H28.75" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M26.25 35H23.75" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_702">
                                    <rect width="40" height="40" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="location__city">Columbia Falls</p>
                    </li>

                    <li className="location__item">
                        <p className="location__temp">31&deg;</p>
                        <svg className="location__img" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_2_702)">
                                <path d="M35 28.125C37.6188 28.125 39.375 26.3688 39.375 23.75C39.375 21.1319 37.6188 18.125 35 18.125C35 11.5781 29.0469 6.875 22.5 6.875C16.7056 6.875 11.6575 10.7569 10.625 16.25C10.625 16.25 9.855 16.25 9.375 16.25C6.10125 16.25 3.75 19.2263 3.75 22.5C3.75 25.7737 6.10125 28.125 9.375 28.125H35Z" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M18.7494 7.345C17.3706 6.2675 15.6356 5.625 13.75 5.625C9.2625 5.625 5.625 9.2625 5.625 13.75C5.625 15.3606 6.06687 16.2369 6.875 17.5" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M3.75 13.75H0" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M13.75 3.75V0" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M6.25 6.25L2.5 2.5" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M15 30V32.5" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M15 35V37.5" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M17.5 31.25L16.25 32.5" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M13.75 35L12.5 36.25" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M17.5 36.25L16.25 35" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M13.75 32.5L12.5 31.25" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M18.75 33.75H16.25" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M13.75 33.75H11.25" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M27.5 31.25V33.75" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M27.5 36.25V38.75" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M30 32.5L28.75 33.75" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M26.25 36.25L25 37.5" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M30 37.5L28.75 36.25" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M26.25 33.75L25 32.5" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M31.25 35H28.75" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                                <path d="M26.25 35H23.75" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_702">
                                    <rect width="40" height="40" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="location__city">Columbia Falls</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Location;