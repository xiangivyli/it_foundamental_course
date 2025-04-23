<template>
    <div class="container">
        <Header title="My Vue APP" action="Get Started" color="purple" bgColor="blue"/>
    </div>
    <div class="container">
        <Header title="To do List" action="Add Task"/>
    </div>
</template>

<script>
import Header from './Header.vue'
export default {
    name: 'App',
    components: {
        Header
    }
}
</script>

<style>
#app {text-align: center;
    margin-top: 60px;}

.container {padding: 10px;
    background-color: lightblue;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    max-width: 60%;
    margin: 20px auto;
    }
</style>