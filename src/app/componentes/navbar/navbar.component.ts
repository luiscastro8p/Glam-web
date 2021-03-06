import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mostrar: false;





  constructor(private auth: AuthService, private Router: Router) { }

  ngOnInit() {
  }

  salir() {
    this.auth.logout();
    this.Router.navigateByUrl('/login');

  };

}
