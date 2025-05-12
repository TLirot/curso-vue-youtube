import { ref, type Ref } from 'vue';

export const useCounter = () => {

    const counter: Ref<number, number> = ref<number>(0);

    const addToCounter = () => {
        counter.value++;
    };
    const restFromCounter = () => {
        counter.value--;
    };

    return {
        counter,
        addToCounter,
        restFromCounter,
    };
}