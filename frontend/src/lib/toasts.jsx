import { toast } from "react-toastify";

export const HandleSuccess = (msg) => {
  toast.success(msg, {
    position: "bottom-right",
  });
};

export const HandleError = (msg) => {
  toast.error(msg, {
    position: "bottom-right",
  });
};

export const HandlePromise = (promise, messages) => {
  toast.promise(promise, {
    pending: messages.pending,
    success: messages.success,
    error: messages.error,
  });
};
