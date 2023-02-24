import React from "react";
import styled from "styled-components";

const StyleFilm = styled.div`
  display: flex;
  width: 200px;
  height: 250px;
`;
const StyleImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 20px;
`;

const StyleImage = styled.img`
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  height: 100%;
  border-radius: inherit;
`;

const StyleIcon = styled.svg`
  font-size: 1.2em;
`;

const Film = () => {
  return (
    <StyleFilm>
      <StyleImg>
        <StyleImage
          src="https://cdn.dribbble.com/users/2400293/screenshots/19662835/media/fa1a4b1b63d03f7a77ed3e18dab6301e.png"
          alt=""
        />
      </StyleImg>
      <div>
        <h3>Spider Man: HomeComing</h3>
        <div>
          <span>2017</span>
          <div>
            <span>7.4</span>
            <StyleIcon
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-3 h-3"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clip-rule="evenodd"
              />
            </StyleIcon>
          </div>
        </div>
        <button>
          <h3>Watch Now</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-2 h-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </button>
      </div>
    </StyleFilm>
  );
};

export default Film;
