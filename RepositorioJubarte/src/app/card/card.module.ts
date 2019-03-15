import {NgModule} from '@angular/core'
import { BodyComponentComponent} from './cards/body-component.component'

@NgModule({
  declarations:[BodyComponentComponent],
  exports:[BodyComponentComponent]
})
export class CardModule{}

