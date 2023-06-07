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
  //informeLogRemoto!                : Observable<DynamicForm[]>;
  //
  informeLogRemotoSTR!               : Observable<string>;
  //
  displayedColumns                   : string[] = ['GRUPO', 'OPCION', 'VALOR', 'DESC_VALOR','ID_PMT_OPCION','OP_ID','TIPO_DATO','MS_COMBO','MS_PADRE','MS_CONDI'];  
  //
  @ViewChild("paginator" ,{read:MatPaginator}) paginator!:  MatPaginator;
  //
  searchForm   = this.formBuilder.group({
      _P_PMT_MODULO         : ["140" , Validators.required],
      _P_ID_REG_MOD         : ["15"  , Validators.required],
  });
  //
  constructor(private logInfoService: ApiDigitacionService, private formBuilder: FormBuilder) {
    //
  }
  //
  ngOnInit(): void {
    //
  }
  //
  ngAfterViewInit():void {
    //
  }
  onSubmit():void
  {
    //
    let _P_PMT_MODULO         : string = this.searchForm.value["_P_PMT_MODULO"]  || "";
    let _P_ID_REG_MOD         : string = this.searchForm.value["_P_ID_REG_MOD"]  || "";  
    let stringSearch          : string = "{\"P_PMT_MODULO\":"+ _P_PMT_MODULO + ",\"P_ID_REG_MOD\":"+ _P_ID_REG_MOD +"}";
    //
    this.update(stringSearch);
  }
  //
  newSearch():void
  {
      //
      console.warn("(NEW SEARCH)");
      //
      this.dataSource           = new MatTableDataSource<DynamicForm>();
      this.dataSource.paginator = this.paginator;
      //
      this.searchForm   = this.formBuilder.group({
        _P_PMT_MODULO         : ["140" , Validators.required],
        _P_ID_REG_MOD         : ["15"  , Validators.required],
      });
  }
  //
  update(_param : string ):void {
    //
    this.informeLogRemotoSTR         = this.logInfoService.getLogRemotoPOST(_param);
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
