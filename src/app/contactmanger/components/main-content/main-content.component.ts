import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  user: any | User
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id']
      this.user = null
      if (!id) {
        id = 1
      }
      this.userService.getUsers().subscribe(users => {
        if (users.length === 0) return;
        setTimeout(() => this.user = this.userService.userById(id), 500)

      })

    })
  }

}
