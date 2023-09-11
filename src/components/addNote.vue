<template>
	<section class="addNote">
		<h2>Add Note</h2>
		<form>
			<label for="title">Title</label>
			<input type="text" id="title" name="title" />
			<label for="content">Content</label>
			<textarea id="content" name="content"></textarea>
			<button @click.prevent="addNote">Add Note</button>
		</form>
	</section>
</template>

<script>
export default {
	name: "AddNote",
	methods: {
		addNote() {
			const title = document.getElementById("title").value;
			const content = document.getElementById("content").value;
			const id = Date.now();
			if (title === "" || content === "") {
				alert("Please fill out all fields");
				return;
			}
			this.$store.commit("addNote", { id, title, content });
			this.title = "";
			this.content = "";
		},
	},
};
</script>

<style scoped>
form {
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 500px;
	margin: auto;
}

h2 {
	text-align: center;
}

button {
	border-radius: 5px;
	border: none;
	background-color: green;
	height: 30px;
	color: white;
	font-weight: bold;
	width: 100px;
	margin: auto;
}

button:hover {
	cursor: pointer;
}

label {
	margin-top: 10px;
}

input,
textarea {
	border-radius: 5px;
	border: 1px solid #ccc;
	padding: 5px;
	margin-bottom: 10px;
}

textarea {
	height: 100px;
}
</style>
