import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(
    private _router:Router,
    private _authService:AuthService  ) { }

  ngOnInit(): void {
  }

  login = () => {
    // ir al backend
    // usuario

    this._authService.login()
      .subscribe( resp => {
        console.log(resp);

        if (resp.id) {
          this._router.navigate( [ './heroes' ] )
        }
        
      } )


  }

}
