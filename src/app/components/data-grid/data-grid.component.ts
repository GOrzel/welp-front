import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  @Input() data: any[];
  @Input() config: any[];
  @Output() actionEvent = new EventEmitter();

  constructor() {
  }

  action(action: string, id: number, arg?: any) {
    this.actionEvent.emit({action, id, arg});
  }

  ngOnInit(): void {
  }

}
