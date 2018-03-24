import { Component, OnInit } from '@angular/core';
import {TodoService} from '../shared/todo.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-todoresult',
  templateUrl: './todoresult.component.html',
  styleUrls: ['./todoresult.component.css']
})
export class TodoresultComponent implements OnInit {
  goals:any;

  constructor(private _actRoute:ActivatedRoute,private _router:Router, private _todo:TodoService) {
    this._actRoute.params.subscribe(res=>console.log(res.id))
   }

  ngOnInit() {
    this._todo.goal.subscribe(res => this.goals=res);
  }
  sendMeTodoList(){
    this._router.navigate(['homePage/togolistLink']);
  }

}
