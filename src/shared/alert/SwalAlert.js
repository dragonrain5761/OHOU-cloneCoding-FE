import Swal from "sweetalert2";
import theme from "../../lib/styles/theme";

export const basicAlert = (title) =>
  Swal.fire({ title, confirmButtonColor: theme.primaryColor });

export const confirmAlert = (title, btn, successText) =>
  Swal.fire({
    title: title,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: theme.primaryColor,
    cancelButtonColor: "#d33",
    confirmButtonText: btn,
    cancelButtonText: "취소",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(successText, "success");
    }
  });
