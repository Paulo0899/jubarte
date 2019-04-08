import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-component',
  templateUrl: './body-component.component.html',

})
export class BodyComponentComponent   {

      @Input() descricao= '';
      @Input() url= '';
      @Input() titulo='';

}
