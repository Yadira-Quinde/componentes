import { Component, Input, OnInit } from '@angular/core';
import { IonButtons, IonBackButton, IonTitle, IonToolbar } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone : false,
})
export class HeaderComponent  implements OnInit {
  @Input() titulo: string=' '

  constructor() { }

  ngOnInit() {}

}
