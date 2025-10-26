import { inject, ref, Ref } from "vue";

const ToastSymbol = Symbol("Toast");

export function useToast() {
  const context = inject < ToastContextType > ToastSymbol;
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}

export function createToastContext() {
  const toasts = ref([]);

  const addToast = (message, type = "info") => {
    const id = Date.now().toString();
    toasts.value.push({ id, message, type });

    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id) => {
    toasts.value = toasts.value.filter((t) => t.id !== id);
  };

  return { toasts, addToast, removeToast };
}

export { ToastSymbol };
