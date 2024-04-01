<script>
    import Nav from "../../components/Nav.svelte";
    import TextContainer from "../../components/TextContainer.svelte";
    import { gameMode, numbersTimeOut, wordsTimeOut } from "../../stores";
    import spanish_words from '../../spanish_words';

    const wordsDb = spanish_words;
    let numbers = [
        Math.floor(Math.random() * (100 - 1 + 1) + 1), 
        Math.floor(Math.random() * (100 - 1 + 1) + 1)
    ];
    const operations = ['&#10005;', '&#247;', '+', '-'];
    let operation = operations[Math.floor(Math.random() * operations.length)];
    let words = [
        wordsDb[Math.floor(Math.random() * wordsDb.length)], 
        wordsDb[Math.floor(Math.random() * wordsDb.length)]
    ];
    let interval = $gameMode=='numbers' ? $numbersTimeOut*1000 : $wordsTimeOut*1000;

    function randomizeTexts(){
        numbers[0] = randomNumber(1,100, numbers[0]);
        numbers[1] = randomNumber(1,100, numbers[1]);
        operation = randomOperation(operation);
        words[0] = randomWord(words[0]);
        words[1] = randomWord(words[1]);
    }

    function randomOperation(actualOperation){
        let newOperation;
        while(true){
            const randomIndex = Math.floor(Math.random() * operations.length);
            newOperation = operations[randomIndex];
            if(newOperation != actualOperation) break;
        }

        return newOperation;
    }

    function randomNumber(min, max, actualNumber) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let newNumber;
        while(true){
            newNumber = Math.floor(Math.random() * (max - min + 1) + min);
            if(newNumber != actualNumber) break;
        }

        return newNumber;
    }

    function randomWord(actualWord){
        let newWord;
        while(true){
            const randomIndex = Math.floor(Math.random() * wordsDb.length);
            newWord = wordsDb[randomIndex];
            if(newWord != actualWord) break;
        }

        return newWord;
    }

    setInterval(randomizeTexts, interval);
</script>

<Nav/>
<main class="flex flex-row justify-around md:justify-center md:gap-4 items-center h-full select-none">
    <TextContainer text={($gameMode=='numbers') ? numbers[0] : words[0]} />
    {#if $gameMode=='numbers'}
        <span>{@html operation}</span>
    {/if}
    <TextContainer text={($gameMode=='numbers') ? numbers[1] : words[1]} />
</main>
