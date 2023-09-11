<template>
	<header>
		<img
			alt="Vue logo"
			class="logo"
			src="./assets/logo.svg"
			width="125"
			height="125" />
	</header>
	<body>
		<AddNote />
		<NotesList />
	</body>
</template>
<script>
import NotesList from "./components/notesList.vue";
import AddNote from "./components/addNote.vue";

export default {
	name: "App",
	components: {
		NotesList,
		AddNote,
	},
};
</script>
<style scoped>
.logo {
	margin-bottom: var(--section-gap);
}

header {
	text-align: center;
}

* {
	box-sizing: border-box;
}

body {
	font-family: sans-serif;
	margin: 0;
	padding: 0;
	--section-gap: 50px;
}
</style>
