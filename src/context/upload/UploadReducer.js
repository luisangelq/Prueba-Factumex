const UploadReducer = (state, action) => {
  switch (action.type) {
    case "UPLOAD_FILES":
      return {
        ...state,
        files: [action.payload, ...state.files],
      };
    case "CLEAN_FILES":
      return {
        ...state,
        files: [],
      };

    default:
      return state;
  }
};

export default UploadReducer;
