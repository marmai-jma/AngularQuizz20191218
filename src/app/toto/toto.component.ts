import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-toto',
  templateUrl: './toto.component.html',
  styles: []
})
export class TotoComponent {

  @Input() bgColor = 'green';

  @Output() disMaCouleur = new EventEmitter<string>();

  declenche() {
    this.disMaCouleur.emit(this.bgColor);
  }

}
