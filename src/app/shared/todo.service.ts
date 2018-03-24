import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TodoService {

    private goals= new BehaviorSubject<any>(['1st goal', '2nd goal']);
    goal=this.goals.asObservable(); 
  constructor() { }

  changeGoal(goal){
    this.goals.next(goal);
  }

}
