<template>
  taskToSave: 
  <pre>
      {{taskToSave}}
  </pre>
</template>

<script>
import { taskService } from "../services/task-service"
export default {
    data(){
        return{
            taskToSave: taskService.getEmptyTask()
        }
    }
}
</script>

<style>

</style>