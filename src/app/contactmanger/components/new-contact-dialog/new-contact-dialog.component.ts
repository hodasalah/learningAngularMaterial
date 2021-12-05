import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<NewContactDialogComponent>,
    private userService: UserService,
    private snackBar: MatSnackBar) { }
  user!: User;
  avatars: string[] = ['svg-1', 'svg-2', 'svg-3', 'svg-4']
  ngOnInit(): void {
    this.user = new User()
  }
  save() {
    this.user.name = this.name.value
    this.userService.addUser(this.user).then(user => this.dialogRef.close(user))
    
    

  }
  
  cancel() {
    this.dialogRef.close(null)
  }
  name = new FormControl('', [Validators.required]);

  getErrorMessage() {

    return this.name.hasError('required') ? 'Not a valid name' : '';
  }
}


