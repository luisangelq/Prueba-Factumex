import { useReducer } from "react";
import UploadContext from "./UploadContext";
import UploadReducer from "./UploadReducer";

const UploadState = (props) => {
  const initialState = {
    files: [],
  };

  const [state, dispatch] = useReducer(UploadReducer, initialState);

  const uploadFiles = (file) => {
    //send file in base64
    const reader = new FileReader();
    reader.readAsDataURL(file[0]);

    reader.onload = function () {
      dispatch({
        type: "UPLOAD_FILES",
        payload: reader.result,
      });
    };
  };

  const cleanFiles = () => {
    dispatch({
      type: "CLEAN_FILES",
    });
  };

  return (
    <UploadContext.Provider
      value={{
        files: state.files,
        uploadFiles,
        cleanFiles,
      }}
    >
      {props.children}
    </UploadContext.Provider>
  );
};

export default UploadState;
