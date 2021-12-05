import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';
import { User } from '../../models/user';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private router: Router) { }
  @Output() toggleSideNav = new EventEmitter();
  @Output() toggleTheme = new EventEmitter();
  @Output() toggleDir=new EventEmitter();
  ngOnInit(): void {
  }
  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 5000
    });
  }
  openAddNewContactDialog() {
    let dialogRef = this.dialog.open(NewContactDialogComponent, {
      width: '450px'
    })
    dialogRef.afterClosed().subscribe((result: User) => {
      console.log('this is result', result)
      if (result) {
        this.openSnackBar("Contact Added", 'Navigate').onAction().subscribe(() => {
          this.router.navigate(['/contactmanager', result.id])
        })
      }
    })
  }
}
