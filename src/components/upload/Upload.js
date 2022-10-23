import React, { useContext } from "react";
import styled from "styled-components";
import Header from "../layout/Header";
import UploadBox from "./UploadBox";
import UploadPreview from "./UploadPreview";

import UploadContext from "../../context/upload/UploadContext";

import { successAlert } from "../../hooks/useAlert";

const Upload = () => {
  const { files, cleanFiles } = useContext(UploadContext);
  return (
    <Container>
      <Header />

      <Content>
        <UploadBox />
        <UploadPreview />
      </Content>

      {files.length > 0 && (
        <UploadBtn
          onClick={() => {
            cleanFiles();
            successAlert("Imagenes subidas correctamente");
          }}
        >
          Subir Imagenes
        </UploadBtn>
      )}
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  height: 100%;

  background-color: var(--White);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    margin-top: 5rem;
  }
`;

const UploadBtn = styled.button`
  margin: 5rem 0;
  padding: 1rem;
  background-color: var(--MediumBlue);
  font-size: 18px;
  border-radius: 1rem;
  color: var(--White);
`;

export default Upload;
