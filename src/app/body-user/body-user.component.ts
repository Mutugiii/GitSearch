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
    let retrievedData = localStorage.getItem('name-data')
    // let parsedData= JSON.stringify(retrievedData);

    this.httpService.userRequest(retrievedData);
    this.user = this.httpService.user

    // this.ngOnInit()
  }

}
