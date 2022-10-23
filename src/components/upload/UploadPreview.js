import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import UploadContext from "../../context/upload/UploadContext";

const UploadPreview = () => {
  const { files } = useContext(UploadContext);
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    if (currentImage < files.length - 1) {
      setCurrentImage(currentImage + 1);
    }

    if (currentImage === files.length - 1) {
      setCurrentImage(0);
    }
  };

  const prevImage = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }

    if (currentImage === 0) {
      setCurrentImage(files.length - 1);
    }
  };

  return (
    <Container>
      {files.length > 0 && (
        <>
          <SelectImageBtn>
            <button onClick={prevImage}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </button>
          </SelectImageBtn>

          <ImageContainer>
            {files.length > 0 && (
              <img src={files[currentImage]} alt="preview" />
            )}
            <Dots>
              {files.map((file, index) => (
                <button
                  key={index}
                  className={index === currentImage ? "active" : ""}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </Dots>
          </ImageContainer>

          <SelectImageBtn>
            <button onClick={nextImage}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </SelectImageBtn>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 0 2rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    max-width: 250px;
  }
`;

const Dots = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: -50px;
  left: 0;
  right: 0;

  button {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: var(--Gray);
    margin: 0 0.5rem;
  }

  .active {
    background-color: var(--MediumBlue);
  }
`;

const SelectImageBtn = styled.div`
  display: flex;
  align-items: center;

  button {
    background-color: transparent;
    border: 1px solid var(--LightBlue);
    cursor: pointer;
    outline: none;
    padding: 0.5rem;
    border-radius: 2rem;

    &:active {
      background-color: var(--WhiteBlue);
    }

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export default UploadPreview;
