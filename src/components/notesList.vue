<template>
	<section class="notesList">
		<h2>Notes</h2>
		<ul>
			<li v-if="$store.state.notes.length === 0">
				<div>
					<h2>No notes yet</h2>
				</div>
			</li>
			<li v-for="note in $store.state.notes" :key="note.id">
				<NoteItem :note="note" />
			</li>
		</ul>
	</section>
</template>

<script>
import NoteItem from "./noteItem.vue";

export default {
	name: "NotesList",
	components: {
		NoteItem,
	},
};
</script>

<style scoped>
ul {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
}

li {
	margin: auto;
}

.notesList {
	width: 100%;
	max-width: 500px;
	margin: 50px auto;
}

h2 {
	text-align: center;
}
</style>
