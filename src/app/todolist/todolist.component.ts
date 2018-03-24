import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TodoService} from '../shared/todo.service';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  itemCount:number;
  btnText:string="Add An Item";
  goalText:string='My 1st Goal1';
  goals=[];

  constructor(private _toastr:ToastrService, private _todo:TodoService) { }

  ngOnInit() {
    
    this._todo.goal.subscribe(res =>this.goals=res);
    this.itemCount=this.goals.length;
    this._todo.changeGoal(this.goals);
    
  }
  addItem(){
    if(this.goalText==''){
     this._toastr.warning('Please Enter The Goal');
    }
    else{
    this.goals.push(this.goalText);
    this.goalText='';
    this.itemCount=this.goals.length;
    this._todo.changeGoal(this.goals);
    this._toastr.success('Goal is Added Successfully');
    }
  }
  removeItems(i){
    if(confirm("R u sure want to delete List Item")==true){
      this.goals.splice(i, 1);
      this._todo.changeGoal(this.goals);
      this.itemCount=this.goals.length;
      this._toastr.success('Deleted successfully..!');
    }
    
  }

}
