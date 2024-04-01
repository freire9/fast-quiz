<script>
    import Nav from "../../components/Nav.svelte";
import { numbersTimeOut, wordsTimeOut } from "../../stores";
</script>

<Nav/>
<main class="flex flex-col m-4 gap-5">
    <div>
        <label for='numbersTimeOut'>Time interval for numbers mode (seconds):</label>
        <div class="flex flex-row items-center mt-2">
            <input id="numbersTimeOut" class="mt-2" type="range" min="0.1" max="10" step="0.1" bind:value={$numbersTimeOut}>
            <p class="ml-3">{$numbersTimeOut}</p>
        </div>
    </div>
    <div>
        <label for="wordsTimeOut">Time interval for words mode (seconds):</label>
        <div class="flex flex-row items-center mt-2">
            <input id="wordsTimeOut" class="mt-2" type="range" min="0.1" max="10" step="0.1" bind:value={$wordsTimeOut}>
            <p class="ml-3">{$wordsTimeOut}</p>
        </div>
    </div>
</main>