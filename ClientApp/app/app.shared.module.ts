import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module'
import { DashboardModule } from './dashboard/dashboard.module'

@NgModule({
    declarations: [
        AppComponent,
        ],
    imports: [
        CommonModule,       
        DashboardModule,
        CoreModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
        ])
    ]
})
export class AppModuleShared {
}
