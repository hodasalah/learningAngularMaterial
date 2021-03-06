import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactmanagerComponent } from './contactmanager.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './components/notes/notes.component';
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes = [{
  path: '', component: ContactmanagerComponent, children: [{ path: ':id', component: MainContentComponent }, { path: '', component: MainContentComponent }]
},
{ path: "**", redirectTo: "" }
]

@NgModule({
  declarations: [
    ContactmanagerComponent,
    MainContentComponent,
    SideNavComponent,
    ToolbarComponent,
    NotesComponent,
    NewContactDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [UserService]
})
export class ContactmanagerModule { }
