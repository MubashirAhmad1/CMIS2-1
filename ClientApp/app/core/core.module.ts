import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BannerComponent } from './components/banner/banner.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component'
import { RouterModule } from '@angular/router'
import { FooterComponent } from './components/footer/footer.component'
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([])
    ],
    declarations: [
        BannerComponent,
        NavMenuComponent,
        FooterComponent
    ],
    exports: [
        BannerComponent,
        NavMenuComponent,
        FooterComponent
    ]
})
export class CoreModule {
}