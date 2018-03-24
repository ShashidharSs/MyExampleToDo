import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../shared/user.model';


@Component({
  selector: 'app-regusers',
  templateUrl: './regusers.component.html',
  styleUrls: ['./regusers.component.css']
})
export class RegusersComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService, private _toastr:ToastrService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    window.dispatchEvent( new Event( 'resize' ) );
      this.loadAllUsers();
  }

 
  deleteUser(id: number) {
    if(confirm('R u sure want to delete')==true){
      this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
      this._toastr.success('deleted successfully');
  }
  }

  private loadAllUsers() {
      this.userService.getAll().subscribe(users => { this.users = users; });
  }
}
