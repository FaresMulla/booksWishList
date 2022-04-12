import { httpService } from './http-service'

const ENDPOINT = 'task'

export const taskService = {
    query,
    getById,
    remove,
    save,
    getEmptyTask,
}

async function query(filterBy) {
    try {
        return await httpService.get(ENDPOINT, filterBy)
    }
    catch (err) {
        console.error('Cannot query tasks', err);
    }
}

async function getById(id) {
    try {
        return await httpService.get(`${ENDPOINT}/${id}`)
    }
    catch (err) {
        console.error('Cannot get tasks', err);
    }
}

async function remove(id) {
    try {
        return await httpService.delete(`${ENDPOINT}/${id}`)
    }
    catch (err) {
        console.error('Cannot remove task', err);
    }
}

async function save(task) {
    try {
        return task._id
            ? await httpService.put(`${ENDPOINT}/${task._id}`, task)
            : await httpService.post(ENDPOINT, task)
    }
    catch (err) {
        console.error('Cannot save task from task service', err);
    }
}

function getEmptyTask() {
    return {
        title: '',
        status: '',
        description: '',
        importance: 0,
        createdAt: Date.now(),
        lastTriedAt: 0,
        triesCount: 0,
        doneAt: 0,
        errors: []
    }
}

// _createManyTasks()
// async function _createManyTasks() {
//   try {
//     const tasks = await query();
//     if (!tasks || !tasks.length) {
//       utilService.saveToStorage(KEY, gTasksTest);
//       gTasksTest.forEach(task => {
//         save(task);
//       });

//     }
//   }
//   catch (err) {
//     console.error('Cannot get tasks', err);
//   }
// }

// _createManySellers()
// async function _createManySellers() {
//   try {
//     const sellers = await query('sellers_DB');
//     if (!sellers || !sellers.length) {
//       utilService.saveToStorage('sellers_DB', gSellersTest);
//     }
//   }
//   catch (err) {
//     console.error('Cannot get tasks', err);
//   }
// }








