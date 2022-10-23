import React, { useCallback, useContext } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import DropzoneManager from "./DropzoneManager";
import { errorAlert } from "../../hooks/useAlert";

import UploadContext from "../../context/upload/UploadContext";

const UploadBox = () => {
    const { uploadFiles } = useContext(UploadContext);
  const onDropRejected = useCallback((rejectedFiles) => {
    errorAlert("El archivo no es válido");
    return;
  }, []);

  const onDropAccepted = useCallback((acceptedFiles) => {
    //accept only jpg, png, jpeg
    const isJpgOrPng =
      acceptedFiles[0].type === "image/jpeg" ||
      acceptedFiles[0].type === "image/png";

    if (!isJpgOrPng) {
        onDropRejected(acceptedFiles);
        return;
    }
    uploadFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDropAccepted,
  });

  return (
    <Container>
      <DropzoneManager
        getRootProps={getRootProps}
        getInputProps={getInputProps}
        isDragActive={isDragActive}
      />
    </Container>
  );
};

const Container = styled.div`
    margin: 0 2rem;

    @media (min-width: 768px) {
        margin: 0 5rem;
    }
`

export default UploadBox;
