<template>
    <header>
        <h1 :style="{ color: color }">{{ title }}</h1>
        <button @click="handleClick()" :style="{ backgroundColor: bgColor }">{{ action }}</button>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: String,
        action: String,
        color: String,
        bgColor: String
    },
    methods: {
        handleClick() {
            alert(`You clicked the ${this.action} button!`);
        }
    }
}
</script>

<style>
button {
    background-color: aquamarine;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 12px;}

h1 {color: chocolate}
</style>