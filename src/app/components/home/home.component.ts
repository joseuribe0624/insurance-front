import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [UserService]
})
export class HomeComponent implements OnInit {
  public page_title: string;

  constructor(
  ) {
    this.page_title = 'BIENVENIDO A INSURANCE'
  }

  ngOnInit(): void {
  }

}
