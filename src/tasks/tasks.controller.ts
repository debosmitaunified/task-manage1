import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor (private taskService:TasksService){}
    @Get() 
        getAllTasks():Task[]{
        return this.taskService.getAllTask();
    }
    @Post()
        createTask(
            @Body('title') title:string,
            @Body('description') description:string,
            ):Task{
            return this.taskService.createTask(title,description);
    }
    @Get('/:id')               
        getTaskById(@Param('id') id:string):Task{
        return this.taskService.getTaskById(id);
    }
    @Delete('/:id')
        deleteTask(@Param('id') id:string){
        this.taskService.deleteTask(id);
        return `the task ${id} is deleted`
    }
    @Patch('/:id')
        updateTask(@Param('id')id:string,
        @Body('status')status:TaskStatus){
        return this.taskService.updateTask(id,status)
    }
}
