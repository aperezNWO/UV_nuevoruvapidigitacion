import { Component, VERSION } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    //
    title             : string = '[NUEVO RUV- CONSULTA - API DIGITACION]';
    appName           : string = "[NUEVO RUV- CONSULTA - API DIGITACION]";
    appVersion        : string = '1.0.0.4';
    runtimeVersion    : string = VERSION.full;
}
