import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContactComponent } from './layout/dialog-contact/dialog-contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}
  openContactDialog() {
    this.dialog.open(DialogContactComponent, {
      data: {
        location: "Par-Naogaon, Naogaon.",
        phone: "01853043768",
        provider: "Siratul Islam",
        email: "randomunworthy@gmail.com"
      }
    })
    
  }
}
