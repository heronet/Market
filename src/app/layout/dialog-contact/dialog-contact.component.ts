import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-contact',
  templateUrl: './dialog-contact.component.html',
  styleUrls: ['./dialog-contact.component.css']
})
export class DialogContactComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {phone: string, location: string, provider: string, email: string}) {}

  ngOnInit(): void {
  }

}
