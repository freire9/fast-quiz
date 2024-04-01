<script>
    import StartButton from "../components/StartButton.svelte";
    import { goto } from "$app/navigation";
    import { gameMode } from '../stores'
    import packageJson from '../../package.json';

    const appVersion = packageJson.version;

    function handleButtonClick(event){
        $gameMode = event.detail;
        goto('/game');
    }
</script>

<nav class="flex flex-row justify-end mr-2 absolute right-0">
    <a href="/settings">Settings</a>
</nav>
<main class="flex flex-col justify-center items-center text-center select-none h-full">
    <h1 class="text-3xl font-semibold">Welcome to <br class="md:hidden">Fast Quiz!</h1>
    <p class="mb-5">Are you ready?</p>
    <div class="flex flex-col gap-4">
        <StartButton on:click={handleButtonClick} text='Start numbers' mode='numbers'/>
        <StartButton on:click={handleButtonClick} text='Start words'mode='words'/>
    </div>
    <p class=" absolute bottom-0 right-0">v{appVersion}</p>
</main> 