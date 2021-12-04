import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';


const SMALL_SCREEN_WIDTH = 720;

@Component({
  selector: 'sideNav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  users!: Observable<User[]>;
  constructor(private breakPointObserver: BreakpointObserver, private userService: UserService, private router: Router) { }
  isScreenSmall: boolean = false;
  //important to close nav after click user in small devices
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  ngOnInit(): void {
    this.breakPointObserver.observe([`(max-width:${SMALL_SCREEN_WIDTH}px)`]).subscribe((state: BreakpointState) => this.isScreenSmall = state.matches)
    this.users = this.userService.getUsers();
    this.userService.loadAll();
    
    this.router.events.subscribe(() => {
      if (this.isScreenSmall) {
        //close our sidenav
        this.sidenav.close()

      }
    })

  }

}
