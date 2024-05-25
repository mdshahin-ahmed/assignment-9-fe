import { toast } from "react-toastify";

export const bloodToast = (type: "success" | "error", messages: string) => {
  const options = {
    position: "bottom-left" as const,
  };
  switch (type) {
    case "success":
      return toast.success(messages, options);
    case "error":
      return toast.error(messages, options);
    default:
      return;
  }
};
