const notes = [{
	title: 'My next trip',
	body: 'I would like to go to Japan'
}, {
	title: 'Habits to work on ',
	body: 'Exercise. Eating better'
}, {
	title: 'Office modification',
	body: 'Get a new seat.'
}]

const filters = {
	searchString: ''
}

// DOM elements selected in order of appearance in HTML. 
const addNotesInput = document.querySelector('.add-notes')
const searcNotesInput = document.querySelector('.search-notes')
const createNoteButton = document.querySelector('.create-note')
const removeAllNotesButton = document.querySelector('.remove-all-notes')
const notesList = document.querySelector('.notes-list')

notes.forEach((note) => {
  const li = document.createElement("li")
	li.textContent = note.title	
  notesList.appendChild(li)
})

const addNote = () => {
	if(addNotesInput.value !== '') {
		const li = document.createElement('li')
		li.textContent = addNotesInput.value
		li.classList.add('notes')
		notesList.appendChild(li)
		notes.push({title: addNotesInput.value}) 	
		addNotesInput.value = ''
	}
}

const renderTitle = (note) => {
	const li = document.createElement('li')
	li.textContent = note.title
	notesList.appendChild(li)
}

const renderNotes = (notes, filters) => {
	const filteredNotes = notes.filter(note => {
		return note.title.toLowerCase().includes(filters.searchString.toLowerCase())
})
	notesList.innerHTML = ''
	filteredNotes.forEach(note => renderTitle(note))
}


const searchNotes = (e) => {
	filters.searchString = e.target.value 
	renderNotes(notes, filters)
}

const removeAllNotes = () => {
const allNotes = todoList.querySelectorAll('.notes')
	allNotes.forEach(note => {
		note.remove()
	})
}

createNoteButton.addEventListener('click', addNote)
searcNotesInput.addEventListener('input', searchNotes)
removeAllNotesButton.addEventListener('click', removeAllNotes)

