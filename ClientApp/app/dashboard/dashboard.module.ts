import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: MainDashboardComponent },
            { path: '**', component: MainDashboardComponent }
        ])
    ],
    declarations: [
        MainDashboardComponent
    ],
    exports: [
    ]
})
export class DashboardModule {
}