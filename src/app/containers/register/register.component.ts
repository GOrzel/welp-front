import {Component, OnInit} from '@angular/core';
import {Validators, FormGroup, FormControl} from '@angular/forms';
import {UsersService} from '../../services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({
    login: new FormControl(null, [
      Validators.required
    ])
  });

  constructor(
    private userService: UsersService,
    private router: Router) {
  }

  addUser(user) {
    this.userService.add(user.login).subscribe((resp: any) => {
      this.router.navigate(['users']);
    });
  }

  ngOnInit(): void {
  }

}
