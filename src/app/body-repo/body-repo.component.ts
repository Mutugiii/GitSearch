import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { GitService } from '../apicalls/git.service';

@Component({
  selector: 'app-body-repo',
  templateUrl: './body-repo.component.html',
  styleUrls: ['./body-repo.component.css']
})
export class BodyRepoComponent implements OnInit {

  repo:Repository;
  myUserName = 'Mutugiii';
  constructor(public httpService:GitService) { }

  ngOnInit() {
    this.httpService.repoRequest(this.myUserName)
  }

}
