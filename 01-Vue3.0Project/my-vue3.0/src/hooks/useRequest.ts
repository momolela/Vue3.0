import { ref } from 'vue';
import axios from 'axios';

export default function useRequest<T>(url: string) {

    const errorMsg = ref('');
    const loading = ref(true);
    const data = ref<T | null>(null);

    axios.get(url).then(response => {
        data.value = response.data;
        loading.value = false;
    }).catch(error => {
        errorMsg.value = error.message || '未知错误';
        loading.value = false;
    });

    return {
        errorMsg,
        loading,
        data
    }
}