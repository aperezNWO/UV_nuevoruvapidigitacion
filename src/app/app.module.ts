import { NgModule                                  } from '@angular/core';
import { FormsModule,ReactiveFormsModule           } from '@angular/forms';
import { RouterModule                              } from '@angular/router';
import { MatListModule                             } from '@angular/material/list';
import { MatTableModule                            } from '@angular/material/table';
import { MatPaginatorModule                        } from '@angular/material/paginator';
import { BrowserModule                             } from '@angular/platform-browser';
import { BrowserAnimationsModule                   } from '@angular/platform-browser/animations';
import { HttpClientModule                          } from '@angular/common/http';
import { AppComponent                              } from './app.component';
import { AppRoutingModule                          } from './app-routing.module';
import { ApidigitacionwebComponent                 } from './apidigitacionweb/apidigitacionweb.component';

@NgModule({
  declarations: [
    AppComponent,
    ApidigitacionwebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatListModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
