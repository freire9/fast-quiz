import { writable} from 'svelte/store';

export const gameMode = writable('words');
export const numbersTimeOut = writable(1);
export const wordsTimeOut = writable(1);
