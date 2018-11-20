import {RouterModule,Routes}from '@angular/router'
import { CardComponent } from './card/card.component';




export const routes:Routes=[
    {
        path:':dat',
        component: CardComponent
    }
]
export const routing = RouterModule.forRoot(routes)