export function useAsyncData() {
    const data = ref(null);
    const error = ref(null);
    const isLoading = ref(false);

    const execute = async (asyncFunction, ...args) => {
        isLoading.value = true;
        try {
            data.value = await asyncFunction(...args);
            error.value = null;
            console.log("ログイン！")
        } catch (e) {
            error.value = e.message || 'エラーが発生しました';
        } finally {
            isLoading.value = false;
    }
};

  return {
    data: computed(() => data.value),
    error: computed(() => error.value),
    isLoading: computed(() => isLoading.value),
    execute
  };
}
