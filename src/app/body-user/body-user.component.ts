import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { GitService } from '../apicalls/git.service';

@Component({
  selector: 'app-body-user',
  templateUrl: './body-user.component.html',
  styleUrls: ['./body-user.component.css']
})
export class BodyUserComponent implements OnInit {

  user: User;
  myUserName = 'Mutugiii';
  constructor(private httpService:GitService) { }

  ngOnInit() {
    this.httpService.userRequest(this.myUserName);
    this.user = this.httpService.user
  }

}
