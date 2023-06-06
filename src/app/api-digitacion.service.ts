import { Injectable                                     } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse          } from '@angular/common/http';
import { DynamicForm                                    } from './log-info.model';
//
@Injectable({
  providedIn: 'root'
})
//
export default class ApiDigitacionService {
  //
  constructor(private http: HttpClient) { 
    //
  }
  //
  getLogRemoto() {
    //
    let url = 'http://localhost:81/api/Digitacion/ConsultarFormularioDinamicoFnGET?_parametros={P_PMT_MODULO:140,P_ID_REG_MOD:15}';
    //
    var HTTPOptions = {
      headers: new HttpHeaders({
          'Accept':'application/text'
         //,'CORS'  : 'Access-Control-Allow-Origin'
      }),
      'responseType': 'text' as 'json'
    }; 
    //
    return this.http.get<DynamicForm[]>(url/*,HTTPOptions*/);   
  }
}
