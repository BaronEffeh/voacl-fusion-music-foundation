import { toast } from "react-toastify";

export const toastOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
};

export const showSuccess = (msg) => {
  toast.success(msg, {
    ...toastOptions,
    style: {
      backgroundColor: "#94f3beff",
      color: "#fff",
      fontWeight: "bold",
      borderRadius: "8px",
    },
  });
};

export const showError = (msg) => {
  toast.error(msg, {
    ...toastOptions,
    style: {
      backgroundColor: "#9A1212",
      color: "#fff",
      fontWeight: "bold",
      borderRadius: "8px",
    },
  });
};

export const showInfo = (msg) => {
  toast.info(msg, {
    ...toastOptions,
    style: {
      backgroundColor: "#FFDDB3",
      color: "#350830",
      fontWeight: "bold",
      borderRadius: "8px",
    },
  });
};
