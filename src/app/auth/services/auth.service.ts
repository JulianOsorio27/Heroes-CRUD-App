import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, Observable, of, tap } from 'rxjs';
import { Auth } from '../interface/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseurl:string =  environment.baseUrl;
  private _auth:Auth | undefined;

  constructor( private _http:HttpClient  ) { }

  get auth() {
    return { ...this._auth }
  }

  verificarAutentificacion = ():Observable<boolean> => {
    if (!localStorage.getItem('id') ) {
      return of(false)
    }

    return this._http.get<Auth>( `${this._baseurl}/usuarios/1` )
        .pipe(
          map( auth => {
            this._auth = auth;
            return true;
          } )
        );

    
  }


  login = ( ):Observable<Auth> => {
    return this._http.get<Auth>( `${this._baseurl}/usuarios/1` )
      .pipe(
        tap( auth => this._auth = auth ),
        tap( auth => localStorage.setItem('id', auth.id ) )
      );
  }

 
    






}
