import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopPanelComponent } from './components/top-panel/top-panel.component';
import { VerticalTabsComponent } from './components/vertical-tabs/vertical-tabs.component';
import { MatTabsModule } from '@angular/material/tabs'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Tab1ComponentComponent } from './components/tab1-component/tab1-component.component';
import { Tab2ComponentComponent } from './components/tab2-component/tab2-component.component';
import { Tab3ComponentComponent } from './components/tab3-component/tab3-component.component';
import { Tab4ComponentComponent } from './components/tab4-component/tab4-component.component';
import { AppRoutingModule } from './app-routing.module';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule, } from 'primeng/card';
import {PanelModule} from 'primeng/panel';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopPanelComponent,
    VerticalTabsComponent,
    Tab1ComponentComponent,
    Tab2ComponentComponent,
    Tab3ComponentComponent,
    Tab4ComponentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule,    
    ReactiveFormsModule, 
    NgbModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    PanelModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
