import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const PhotoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  padding: 20px;
`;
const StyleImage = styled.div`
  width: 400px;
  height: 200px;
  border-radius: 15px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;
const StyleImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  overflow: hidden;
  object-fit: cover;
`;
const StyleButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 15px 40px;
  color: white;
  background-color: #2979ff;
  border-radius: 15px;
  border: none;
  cursor: pointer;
`;
const StyleBox = styled.div`
  height: 100px;
  background-color: transparent;
`;

const getRandomPhotos = async (limit) => {
  return axios
    .get(`https://picsum.photos/v2/list?limit=${limit}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.message;
    });
};

const Photo = () => {
  const handlePagePhoto = () => {
    getRandomPhotos(limit).then((photos) => {
      console.log(photos);
      setArrayPhotos(photos);
    });
    setLimit(limit + 9);
  };
  const [arrayPhotos, setArrayPhotos] = useState([]);
  const [limit, setLimit] = useState(9);

  useEffect(() => {
    handlePagePhoto();
  }, []);

  return (
    <>
      <PhotoWrapper>
        {arrayPhotos.map((photo, index) => (
          <StyleImage key={index}>
            <StyleImg src={photo.download_url} alt="" />
          </StyleImage>
        ))}
      </PhotoWrapper>
      <StyleBox>
        <StyleButton onClick={handlePagePhoto}>Next Page</StyleButton>
      </StyleBox>
    </>
  );
};

export default Photo;
