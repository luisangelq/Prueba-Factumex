import Swal from "sweetalert2";

const successAlert = (msg: string) => {
  Swal.fire({
    icon: "success",
    title: msg,
    showConfirmButton: false,
    timer: 2000,
  });
};

const errorAlert = (msg: string) => {
  Swal.fire({
    icon: "error",
    title: msg,
    showConfirmButton: true,

  });
};

export { successAlert, errorAlert };
