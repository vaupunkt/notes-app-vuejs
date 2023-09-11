import { createStore } from "vuex";

export default createStore({
	state: {
		notes: [
			{ title: "First Note", content: "This is the first note", id: 1 },
			{ title: "Second Note", content: "This is the second note", id: 2 },
			{ title: "Third Note", content: "This is the third note", id: 3 },
		],
	},
	mutations: {
		addNote: (state, note) => state.notes.push(note),
		deleteNote: (state, id) =>
			(state.notes = state.notes.filter((note) => note.id !== id)),
	},
});
