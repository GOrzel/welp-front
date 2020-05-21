import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any;
  config: any[] = [
    {key: 'id', type: 'text'},
    {key: 'login'},
    {key: 'id', type: 'button', text: 'remove'}
  ];

  constructor(
    private userService: UsersService
  ) {
    this.fetchItems();

  }

  private fetchItems() {
    this.userService.fetch().subscribe((resp: any) => {
      this.users = resp;
    });
  }

  action({action, id}) {
    switch (action) {
      case 'remove':
        this.userService.remove(id).subscribe(resp => {
          this.fetchItems();
        });
        break;

      default:
        break;
    }
  }

  ngOnInit(): void {
  }

}
