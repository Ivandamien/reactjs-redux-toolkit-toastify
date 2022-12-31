/* eslint-disable no-unreachable-loop */
import { toast } from "react-toastify";

export default function showToastier(message, autoClose = 2000, type = "info", refresh = false) {
  if (refresh) {
    setTimeout(() => {
      window.location.reload(true);
    }, autoClose + 1000);
  }
  return toast(message, {
    position: "top-right",
    autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    type,
  });
}
