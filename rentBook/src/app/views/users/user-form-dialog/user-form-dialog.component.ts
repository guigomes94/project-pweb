import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-user-form-dialog',
  templateUrl: './user-form-dialog.component.html',
  styleUrls: ['./user-form-dialog.component.css']
})
export class UserFormDialogComponent implements OnInit {

  user: User;

  public userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    public dialogRef: MatDialogRef<UserFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.user = data.data
  }

  ngOnInit(): void {

    if (this.user) {
      this.userForm = this.fb.group({
        id: [this.user.id],
        avatar: [this.user.avatar],
        name: [this.user.name, [Validators.required]],
        phone: [this.user.phone],
        email: [this.user.email, [Validators.required]]
      })
    } else {
      this.userForm = this.fb.group({
        avatar: [''],
        name: ['', [Validators.required]],
        phone: [''],
        email: ['', [Validators.required]]
      })
    }
  }

  createOrUpdateUser(){
    const user = this.userForm.value;

    if (user.id) {
      this.userService.update(user).subscribe(res => {
        this.dialogRef.close(res);
      });
    } else {
      this.userService.add(user).subscribe(res => {
        this.dialogRef.close(res);
      });
    }

    this.userForm.reset();
  }

  cancel(): void {
    this.dialogRef.close();
    this.userForm.reset();
  }

}
