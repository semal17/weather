import './Info.css';

function Info({ items }) {

  let sunriseHour = new Date(items.current.sunrise * 1000).getHours();
  let sunriseMinutes = new Date(items.current.sunrise * 1000).getMinutes();

  let sunsetHour = new Date(items.current.sunset * 1000).getHours();
  let sunsetMinutes = new Date(items.current.sunset * 1000).getMinutes();


  return (
    <section className="info">
      <h2 className="info__title">More Info</h2>
      <ul className="info__list">
        <li className="info__item">
          <p className="info__text">Sunrise</p>
          <svg className="info__img" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 26.4375H36" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
            <path d="M5.625 20.8125H0" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
            <path d="M36 20.8125H30.375" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
            <path d="M18 8.4375V2.25" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
            <path d="M7.875 12.9375L3.375 8.4375" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
            <path d="M28.125 12.9375L32.625 8.4375" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
            <path d="M21.9375 33.75L18 29.8125L14.0625 33.75" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" strokeLinejoin="bevel" />
            <path d="M27.0894 26.4375C28.1025 24.804 28.6875 22.8763 28.6875 20.8125C28.6875 14.9102 23.9029 10.125 18 10.125C12.0971 10.125 7.3125 14.9102 7.3125 20.8125C7.3125 22.8757 7.8975 24.8029 8.91056 26.4364" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
          </svg>
          <p className="info__caption">{sunriseHour}:{sunriseMinutes} am</p>
        </li>

        <li className="info__item">
          <p className="info__text">Sunset</p>
          <svg className="info__img" width="41" height="37" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2_1191)">
              <path d="M0.0297852 27.1064H40.6634" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
              <path d="M6.3788 21.4814H0.0297852" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
              <path d="M40.6635 21.4814H34.3145" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
              <path d="M20.3467 9.10638V2.91888" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
              <path d="M8.91844 13.6064L3.83923 9.10638" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
              <path d="M31.7749 13.6064L36.8541 9.10638" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
              <path d="M15.9024 30.4814L20.3467 34.4189L24.791 30.4814" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" strokeLinejoin="bevel" />
              <path d="M30.6059 27.1064C31.7494 25.4729 32.4097 23.5452 32.4097 21.4814C32.4097 15.5791 27.0092 10.7939 20.3466 10.7939C13.6839 10.7939 8.28345 15.5791 8.28345 21.4814C8.28345 23.5446 8.94374 25.4718 10.0872 27.1053" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
            </g>
            <defs>
              <clipPath id="clip0_2_1191">
                <rect width="40.6337" height="36" fill="white" transform="translate(0.0297852 0.668884)" />
              </clipPath>
            </defs>
          </svg>
          <p className="info__caption">{sunsetHour}:{sunsetMinutes} pm</p>
        </li>

        <li className="info__item">
          <p className="info__text">Chance of Rain</p>
          <svg width="42" height="37" viewBox="0 0 42 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2_1204)">
              <path d="M35.6423 23.1689C38.5406 23.1689 40.7215 21.2367 40.7215 18.6689C40.7215 16.1011 38.5406 13.6064 35.6423 13.6064C35.6423 7.18601 29.5562 2.35638 22.3094 2.35638C15.8956 2.35638 10.1193 5.96932 8.97648 11.3564C8.97648 11.3564 8.23682 11.3564 7.70668 11.3564C4.08266 11.3564 1.35767 14.3331 1.35767 17.5439C1.35767 20.7546 4.08266 23.1689 7.70668 23.1689H35.6423Z" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
              <path d="M8.34155 26.5439V34.4189" stroke="#0076FF" strokeWidth="1.6" strokeMiterlimit="10" />
              <path d="M21.0396 26.5439V34.4189" stroke="#0076FF" strokeWidth="1.6" strokeMiterlimit="10" />
              <path d="M27.3885 26.5439V34.4189" stroke="#0076FF" strokeWidth="1.6" strokeMiterlimit="10" />
              <path d="M33.7375 26.5439V34.4189" stroke="#0076FF" strokeWidth="1.6" strokeMiterlimit="10" />
              <path d="M14.6906 26.5439V34.4189" stroke="#0076FF" strokeWidth="1.6" strokeMiterlimit="10" />
            </g>
            <defs>
              <clipPath id="clip0_2_1204">
                <rect width="40.6337" height="36" fill="white" transform="translate(0.722778 0.668884)" />
              </clipPath>
            </defs>
          </svg>

          <p className="info__caption">{items.daily[0].pop * 100}%</p>
        </li>

        <li className="info__item">
          <p className="info__text">Humidity</p>
          <svg className="info__img" width="41" height="37" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2_1216)">
              <path d="M7.01378 23.8804C7.04679 30.6333 12.9825 36.1064 20.3467 36.1064C27.7109 36.1064 33.6796 30.6333 33.6796 23.8804C33.6796 15.1414 20.3689 1.23138 20.3689 1.23138C20.3689 1.23138 6.96997 15.1414 7.01378 23.8804Z" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
            </g>
            <defs>
              <clipPath id="clip0_2_1216">
                <rect width="40.6337" height="36" fill="white" transform="translate(0.0297852 0.668884)" />
              </clipPath>
            </defs>
          </svg>
          <p className="info__caption">{items.current.humidity}%</p>
        </li>

        <li className="info__item">
          <p className="info__text">Wind</p>
          <svg className="info__img" width="42" height="37" viewBox="0 0 42 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2_1159)">
              <path d="M21.0396 36.1064C31.9096 36.1064 40.7215 28.2994 40.7215 18.6689C40.7215 9.03848 31.9096 1.23145 21.0396 1.23145C10.1696 1.23145 1.35767 9.03848 1.35767 18.6689C1.35767 28.2994 10.1696 36.1064 21.0396 36.1064Z" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
              <path d="M21.0396 20.9189C22.4422 20.9189 23.5792 19.9116 23.5792 18.6689C23.5792 17.4263 22.4422 16.4189 21.0396 16.4189C19.637 16.4189 18.5 17.4263 18.5 18.6689C18.5 19.9116 19.637 20.9189 21.0396 20.9189Z" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
              <path d="M15.6525 13.8961C12.6767 16.5319 10.2463 28.2308 10.2463 28.2308C10.2463 28.2308 23.4516 26.0781 26.4268 23.4417C29.4026 20.8047 29.4019 16.5314 26.4268 13.8955C23.4523 11.2596 18.6277 11.2591 15.6525 13.8961Z" stroke="#0076FF" strokeWidth="1.6" strokeMiterlimit="10" />
            </g>
            <defs>
              <clipPath id="clip0_2_1159">
                <rect width="40.6337" height="36" fill="white" transform="translate(0.722778 0.668945)" />
              </clipPath>
            </defs>
          </svg>
          <p className="info__caption">{items.current.wind_speed} met/sec</p>
        </li>

        <li className="info__item">
          <p className="info__text">Feels Like</p>
          <svg className="info__img" width="41" height="37" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2_1223)">
              <path d="M35.5843 28.7939C38.2445 28.7939 40.0286 27.2133 40.0286 24.8564C40.0286 22.5001 38.2445 19.7939 35.5843 19.7939C35.5843 13.9018 29.5368 9.66895 22.8863 9.66895C17.0001 9.66895 11.872 13.1626 10.8231 18.1064C10.8231 18.1064 10.0403 18.1064 9.55334 18.1064C6.22773 18.1064 3.83923 20.7851 3.83923 23.7314C3.83923 26.6778 6.22773 28.7939 9.55334 28.7939H35.5843Z" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
              <path d="M19.0762 10.0919C17.6756 9.1222 15.9131 8.54395 13.9976 8.54395C9.43902 8.54395 5.7439 11.8177 5.7439 15.8564C5.7439 17.306 6.19277 18.0946 7.0137 19.2314" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
              <path d="M3.83919 15.8564H0.0297852" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
              <path d="M13.9976 6.85645V3.48145" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
              <path d="M6.37874 9.10645L2.56934 5.73145" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" />
            </g>
            <defs>
              <clipPath id="clip0_2_1223">
                <rect width="40.6337" height="36" fill="white" transform="translate(0.0297852 0.668945)" />
              </clipPath>
            </defs>
          </svg>

          <p className="info__caption">{Math.round(items.current.feels_like)}&deg;</p>
        </li>


        <li className="info__item">
          <p className="info__text">Visibility</p>          
          <p className="info__caption">{items.current.visibility} m</p>
        </li>

        <li className="info__item">
          <p className="info__text">Pressure</p>          
          <p className="info__caption">{((items.current.pressure * 100) / 3386).toFixed(2)} inHg</p>
        </li>

        <li className="info__item">
          <p className="info__text">UV Index</p>          
          <p className="info__caption">{items.current.uvi}</p>
        </li>

        <li className="info__item">
          <p className="info__text">Clouds</p>          
          <p className="info__caption">{items.current.clouds}%</p>
        </li>

        
        <li className="info__item">
          <p className="info__text">Dew Point</p>          
          <p className="info__caption">{Math.round(items.current.dew_point)}&deg;</p>
        </li>

        <li className="info__item">
          <p className="info__text">Wind Gust</p>          
          <p className="info__caption">{items.current.wind_gust} met/sec</p>
        </li>



      </ul>
    </section>
  );
}

export default Info;