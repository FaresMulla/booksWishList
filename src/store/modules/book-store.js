import { bookService } from '@/services/book-service.js'

export default {
  state: {
    books: [],
    filterBy: { title: '', status: 0, importance: 0, createdAt: 0, triesCount: 0},
  },
  getters: {
    books({ books }) {
      return books
    },    
    booksToShow({ books, filterBy }) {
      const copyBooks = JSON.parse(JSON.stringify(books))
      return copyBooks
    },
    
  },
  mutations: {
    setBooks(state, { books }) {
      state.books = books
      console.log('books are set in store');
    },

    saveBook(state, { task }) {
      const idx = state.books.findIndex((g) => g._id === task._id)
      if (idx !== -1) state.books.splice(idx, 1, task)
      else state.books.push(task)
      console.log('I saved');
    },

    removeBook(state, { taskId }) {
      const idx = state.books.findIndex((g) => g._id === taskId)
      state.books.splice(idx, 1)
    },

    setFilter(state, { filterBy }) {
      // console.log('I am in the store', filterBy);      
      state.filterBy = filterBy
    },

    setSort(state, { sortBy }) {
      state.sortBy = sortBy
    },
  },

  actions: {
    async loadBooks({ commit, state }) {
      try{
      const books = await bookService.query(state.filterBy)
      commit({ type: 'setBooks', books })
      console.log('store commit books');
      }
      catch(err){
        console.error('Cannot load Books', err);
      }    
    },

    async saveBook({ commit }, { task }) {
      try{
      const savedBook = await bookService.save(task)
      commit({ type: 'saveBook', task: savedBook })
      return savedBook
      }
      catch(err){
        console.error('Cannot save task', err);
      }
    },

    async removeBook({ commit }, { taskId }) {
      try{
      await bookService.remove(taskId)
        commit({ type: 'removeBook', taskId })
      }
      catch(err){
        console.error('Cannot remove task', err);
      }
    },

    setFilter({ dispatch, commit }, { filterBy }) {
      commit({ type: 'setFilter', filterBy })
      dispatch({ type: 'loadBooks' })
    },
  },
}
