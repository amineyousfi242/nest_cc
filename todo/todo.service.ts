import { Injectable } from '@nestjs/common';

export class Todo {
    status:boolean;
    name:string;
    id:string;
}
@Inject class TodoService
export class TodoService {
    private todos:Todo[]=[{status:true,name:'amine',id:1}];
}
