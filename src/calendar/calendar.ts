import {
    Component,
    Input,
    Output,
    ElementRef,
    EventEmitter,
    AfterViewInit,
    NgZone,
} from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';
import {Options} from "fullcalendar";

@Component({
  template: '<div></div>',
  selector: 'angular2-fullcalendar'
})
export class CalendarComponent implements AfterViewInit {

  @Input() options: Options;
  @Output() initialized: EventEmitter<boolean> = new EventEmitter<boolean>();
  text: string;

  constructor(private element:ElementRef, private zone: NgZone) {
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.zone.runOutsideAngular(() => {
        $('angular2-fullcalendar').fullCalendar(this.options);
        this.initialized.emit(true);
      })
    }, 100)
  }


  fullCalendar(...args: any[]): any {
    if (!args) {
      return;
    }
    switch (args.length) {
      case 0:
        return;
      case 1:
        return $(this.element.nativeElement).fullCalendar(args[0]);
      case 2:
        return $(this.element.nativeElement).fullCalendar(args[0], args[1]);
      case 3:
        return $(this.element.nativeElement).fullCalendar(args[0], args[1], args[2]);
    }
  }

}
