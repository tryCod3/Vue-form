<template>
	<div id="app">
		<FormInfo />
	</div>
</template>

<script>
import FormInfo from "./components/formInfor/FormInfor.vue";

export default {
	name: "App",
	components: {
		FormInfo,
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Akaya+Telivigala&family=Dongle:wght@300;400;700&family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;1,100;1,200;1,300&family=Lato:ital,wght@0,400;1,300&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;1,100;1,200;1,300;1,400&family=Roboto+Mono:ital,wght@1,100&family=Source+Code+Pro:wght@200;300&family=Ubuntu+Mono:wght@700&display=swap");

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Roboto Mono";
	color: blue;
	font-weight: bold;
}
</style>
