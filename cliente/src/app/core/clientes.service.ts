import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Cliente } from '../shared/cliente';
import { Observable, throwError,BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private loggedIn =new BehaviorSubject<boolean> (false);
  private clienteUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  get isLogged():Observable<boolean>{
   return this.loggedIn.asObservable();

  }
 login(authData:Cliente){
 this.loggedIn.next(true);
 }
logout(){
this.loggedIn.next(false);
}
getClienteById(id: number): Observable<Cliente> {
    const url = `${this.clienteUrl+"/cuidador"}/${id}`;
    return this.http.get<any>(url).pipe(
      tap((data) => console.log('getCliente: ' + JSON.stringify(data))),
      map((data) => {
        return data[0]
      }),
      catchError(this.handleError)
    );
  }
  
  deleteCliente(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.clienteUrl+"/cuidador-delete"}/${id}`;
    return this.http.delete<Cliente>(url, { headers: headers }).pipe(
      tap((data) => console.log('deleteCliente: ' + id)),
      catchError(this.handleError)
    );
  }
  updateCliente(cuidador: Cliente): Observable<Cliente> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.clienteUrl+"/cuidador-edit"}/${cuidador.id}`;
    return this.http.put<Cliente>(url, cuidador, { headers: headers }).pipe(
      tap(() => console.log('updateCliente: ' + cuidador.id)),
      // Return the product on an update
      map(() => cuidador),
      catchError(this.handleError)
    );
  }
  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
