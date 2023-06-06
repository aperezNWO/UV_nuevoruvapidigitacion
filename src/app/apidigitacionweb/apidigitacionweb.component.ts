import { AfterViewInit, Component, OnInit, ViewChild   } from '@angular/core';
import { MatTableDataSource                            } from '@angular/material/table';
import { MatPaginator                                  } from '@angular/material/paginator';
import { FormBuilder, Validators                       } from '@angular/forms';
import { Observable                                    } from 'rxjs';
import { DynamicForm,SearchCriteria                    } from '../log-info.model';
import   ApiDigitacionService                            from '../api-digitacion.service';


@Component({
  selector: 'app-apidigitacionweb',
  templateUrl: './apidigitacionweb.component.html',
  styleUrls: ['./apidigitacionweb.component.scss']
})
//
export class ApidigitacionwebComponent implements OnInit, AfterViewInit {
  //
  dataSource                         = new MatTableDataSource<DynamicForm>();
  // 
  //informeLogRemoto!                  : Observable<DynamicForm[]>;
  //
  informeLogRemotoSTR!               : Observable<string>;
  //
  displayedColumns                   : string[] = ['GRUPO', 'OPCION', 'VALOR', 'DESC_VALOR','ID_PMT_OPCION','OP_ID','TIPO_DATO','MS_COMBO','MS_PADRE','MS_CONDI'];  
  //
  @ViewChild("paginator" ,{read:MatPaginator}) paginator!:  MatPaginator;
  //
  constructor(private logInfoService: ApiDigitacionService, private formBuilder: FormBuilder) {
    //
  }
  //
  ngOnInit(): void {
    //
    this.update();
  }
  //
  ngAfterViewInit():void {
    //
  }
  //
  update():void {
    //
    this.informeLogRemotoSTR         = this.logInfoService.getLogRemotoPOST();
    //
    const myObserver                 = {
      next: (p_logEntry: string)     => { 
        //
        console.log('RETURN VALUES : '  +  p_logEntry);
        //
        let jsonParseResult        : [] =  JSON.parse(p_logEntry);
        //
        this.dataSource           = new MatTableDataSource<DynamicForm>(jsonParseResult);
        this.dataSource.paginator = this.paginator;
        
      },
      error: (err: Error)         => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    //
    this.informeLogRemotoSTR.subscribe(myObserver);
  }
}
