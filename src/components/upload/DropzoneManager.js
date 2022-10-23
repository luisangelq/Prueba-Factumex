import styled from "styled-components";
import addFiles from "../../images/addFiles.svg";

const DropzoneManager = ({
  getRootProps,
  getInputProps,
  isDragActive,
}) => {
  return (
    <DropzoneContainer {...getRootProps()}>
      <img src={addFiles} alt="addFile" />
      <input {...getInputProps()} />
      {isDragActive ? (
        <h3>Drop Here</h3>
      ) : (
        <>
          <h3>Arrastra una imagen</h3>

          <button>Selecciona la imagen</button>
        </>
      )}
    </DropzoneContainer>
  );
};

const DropzoneContainer = styled.div`
  border-style: dashed;
  border-color: var(--LightBlue);
  border-width: 2px;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    height: 3rem;
    margin-top: 2rem;
  }

  h3 {
    margin: 5rem;
    letter-spacing: 0.07rem;
  }
  p {
    margin: 0.5rem 0 2rem 0;
  }

  button {
    margin: 1rem 0;
    background-color: #0060df;
    color: #fff;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #003eaa;
    }
  }

  a {
    margin-top: 1rem;
    color: #0060df;
    font-weight: 550;
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    padding: 1rem .5rem;
    
    h3 {
      margin: 2rem;
    }
  }
`;

export default DropzoneManager;
