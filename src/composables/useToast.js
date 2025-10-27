import { inject, ref } from "vue";

const ToastSymbol = Symbol("Toast");

export function useToast() {
  const context = inject(ToastSymbol); 
  if (!context) {
    throw new Error("useToast() must be used within the scope of the Toast provider (App.vue)");
  }
  return context; 
}

export function createToastContext() {
  const toasts = ref([]);

  const addToast = (message, type = "info") => {
    const id = Date.now().toString();
    const validTypes = ['success', 'error', 'info'];
    const toastType = validTypes.includes(type) ? type : 'info';
    toasts.value.push({ id, message, type: toastType });

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

