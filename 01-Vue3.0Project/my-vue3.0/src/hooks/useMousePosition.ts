import { ref, onMounted, onUnmounted } from 'vue';

export default function useMousePosition() {
    const x = ref(-1);
    const y = ref(-1);

    const updateMousePosition = (event: MouseEvent) => {
        x.value = event.pageX;
        y.value = event.pageY;
    };

    onMounted(() => {
        window.addEventListener('click', updateMousePosition);
    });

    onUnmounted(() => {
        window.removeEventListener('click', updateMousePosition);
    });

    return { x, y };
}