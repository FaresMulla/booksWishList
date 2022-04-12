import { taskService } from '@/services/task-service.js'

export default {
  state: {
    tasks: [],
    filterBy: { title: '', status: 0, importance: 0, createdAt: 0, triesCount: 0},
  },
  getters: {
    tasks({ tasks }) {
      return tasks
    },    
    tasksToShow({ tasks, filterBy }) {
      const copyTasks = JSON.parse(JSON.stringify(tasks))
      return copyTasks
    },
    
  },
  mutations: {
    setTasks(state, { tasks }) {
      state.tasks = tasks
      console.log('tasks are set in store');
    },

    saveTask(state, { task }) {
      const idx = state.tasks.findIndex((g) => g._id === task._id)
      if (idx !== -1) state.tasks.splice(idx, 1, task)
      else state.tasks.push(task)
      console.log('I saved');
    },

    removeTask(state, { taskId }) {
      const idx = state.tasks.findIndex((g) => g._id === taskId)
      state.tasks.splice(idx, 1)
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
    async loadTasks({ commit, state }) {
      try{
      const tasks = await taskService.query(state.filterBy)
      commit({ type: 'setTasks', tasks })
      console.log('store commit tasks');
      }
      catch(err){
        console.error('Cannot load Tasks', err);
      }    
    },

    async saveTask({ commit }, { task }) {
      try{
      const savedTask = await taskService.save(task)
      commit({ type: 'saveTask', task: savedTask })
      return savedTask
      }
      catch(err){
        console.error('Cannot save task', err);
      }
    },

    async removeTask({ commit }, { taskId }) {
      try{
      await taskService.remove(taskId)
        commit({ type: 'removeTask', taskId })
      }
      catch(err){
        console.error('Cannot remove task', err);
      }
    },

    setFilter({ dispatch, commit }, { filterBy }) {
      commit({ type: 'setFilter', filterBy })
      dispatch({ type: 'loadTasks' })
    },
  },
}
