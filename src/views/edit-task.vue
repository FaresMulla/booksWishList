<template>
  taskToSave: 
  <pre>
      {{taskToSave}}
  </pre>
</template>

<script>
import { bookService } from "../services/book-service"
export default {
    data(){
        return{
            taskToSave: bookService.getEmptyTask()
        }
    }
}
</script>

<style>

</style>