<template>
	<div class="noteItemBlock">
		<article class="noteItem">
			<h3>{{ note.title }}</h3>
			<p>{{ note.content }}</p>
		</article>
		<button @click="deleteNote">Delete</button>
	</div>
</template>

<script>
export default {
	name: "NoteItem",
	props: {
		note: {
			type: Object,
			required: true,
		},
	},
	methods: {
		deleteNote() {
			this.$store.commit("deleteNote", this.note.id);
		},
	},
};
</script>

<style scoped>
.noteItem {
	border: 1px solid black;
	border-radius: 5px;
	padding: 10px;
	margin: 10px;
}

.noteItemBlock {
	display: flex;
	flex-direction: column;
}

button {
	border-radius: 5px;
	border: none;
	background-color: red;
	height: 30px;
	color: white;
	font-weight: bold;
	width: 100px;
	margin: auto;
}

button:hover {
	cursor: pointer;
}

h3 {
	margin: 0;
}

p {
	margin: 0;
}
</style>
