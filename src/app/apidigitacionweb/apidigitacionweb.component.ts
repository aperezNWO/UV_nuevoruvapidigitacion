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
  informeLogRemoto!                  : Observable<DynamicForm[]>;
  //
  displayedColumns                   : string[] = ['GRUPO'/*, 'OPCION', 'VALOR', 'DESC_VALOR','ID_PMT_OPCION','OP_ID','TIPO_DATO','MS_COMBO','MS_PADRE','MS_CONDI'*/];
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
    this.informeLogRemoto     = this.logInfoService.getLogRemotoPOST();
    //
    const myObserver          = {
      next: (p_logEntry: DynamicForm[])     => { 
        //
        //console.log('Observer got a next value: ' + JSON.stringify(p_logEntry));
        //console.log('Observer got a next value: ' + p_logEntry);
        //
        //this.dataSource           = new MatTableDataSource<DynamicForm>(p_logEntry);
        //
        //let jsonArray : JSON = JSON.parse(p_logEntry);
        //let arrayForm : DynamicForm[];

        //jsonArray.forEach(_p_logEntry=>{
        //  console.log('Observer got a item value:');
        //});
        //      
        
        //
        //this.dataSource             = new MatTableDataSource<DynamicForm>(jsonArray);
        //this.dataSource.paginator   = this.paginator;
      },
      error: (err: Error)       => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    //
    this.informeLogRemoto.subscribe(myObserver);
  }
}
