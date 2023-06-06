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
export class ApidigitacionwebComponent implements OnInit {
  //
  informeLogRemoto!                  : Observable<DynamicForm[]>;
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
  update(/*_searchCriteria : SearchCriteria*/):void {
    //
    this.informeLogRemoto = this.logInfoService.getLogRemotoPOST();
    //
    const myObserver = {
      next: (p_logEntry: DynamicForm[])     => { 
        //
        console.log('Observer got a next value: ' + JSON.stringify(p_logEntry));
        //
        //this.dataSource           = new MatTableDataSource<LogEntry>(p_logEntry);
        //this.dataSource.paginator = this.paginator;
      },
      error: (err: Error)       => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    //
    this.informeLogRemoto.subscribe(myObserver);
  }
}
