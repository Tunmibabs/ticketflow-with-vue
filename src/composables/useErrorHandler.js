import { useToast } from "./useToast";
import { useRouter } from "vue-router";
import { ERROR_MESSAGES } from "../utils/errorMessages";

export function useErrorHandler() {
  const { addToast } = useToast();
  const router = useRouter();

  const handleError = (error, options = {}) => {
    const message = error?.message || ERROR_MESSAGES.GENERIC_ERROR;
    if (options.showToast) {
      addToast(message, "error");
    }
    console.error("[v0] Error:", error);
  };

  const handleSessionExpired = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("currentUser");
    addToast(ERROR_MESSAGES.AUTH_SESSION_EXPIRED, "error");
    router.push("/login");
  };

  return { handleError, handleSessionExpired };
}
