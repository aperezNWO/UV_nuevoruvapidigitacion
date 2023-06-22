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
  getLogRemotoPOST(_param : string) {
      //
      /*
      {
        "P_PMT_MODULO": 140,
        "P_ID_REG_MOD": 15
      }
      **/      
      //      
      let  url           = 'http://vivantopruebas.unidadvictimas.gov.co/ApiDigitacion/api/ApiDigitacion/ConsultarFormularioDinamicosp';
      //let    url       = 'http://localhost:81/api/Digitacion/ConsultarFormularioDinamicosp';

      //
      var HTTPOptions = {
        headers: new HttpHeaders({
             'Content-Type' : 'application/json'
        }),
        'responseType': 'text' as 'json'
      }; 
      //
      let _body       : JSON = JSON.parse(_param);
      //
      return this.http.post<string>(url,_body,HTTPOptions);   
    }
    //
    getLogRemotoGET() {
      //
      let url = 'http://localhost:81/api/Digitacion/ConsultarFormularioDinamicoFnGET?_parametros={P_PMT_MODULO:140,P_ID_REG_MOD:15}';
      //
      var HTTPOptions = {
        headers: new HttpHeaders({
            'Accept':'application/text'
        }),
        'responseType': 'text' as 'json'
      }; 
      //
      return this.http.get<DynamicForm[]>(url/*,HTTPOptions*/);   
  }
}
