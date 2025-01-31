import toast from "react-hot-toast";

const errorToast = (msg) => {
  toast.error(msg, {
    duration: 4000,
    icon: "❌",
    style: {
      borderRadius: "50px",
      background: "#333",
      color: "#fff",
    },
  });
};

const infoToast = (msg) => {
  toast(msg, {
    duration: 4000,
    icon: "ℹ️",
    style: {
      borderRadius: "50px",
      background: "#333",
      color: "#fff",
    },
  });
};

const successToast = (msg) => {
  toast.success(msg, {
    duration: 4000,
    icon: "✅",
    style: {
      borderRadius: "50px",
      background: "#333",
      color: "#fff",
    },
  });
};

const warningToast = (msg) => {
  toast.error(msg, {
    duration: 4000,
    icon: "⚠️",
    style: {
      borderRadius: "50px",
      background: "#333",
      color: "#fff",
    },
  });
};

export { successToast, errorToast, warningToast, infoToast };
