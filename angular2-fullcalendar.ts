import { CalendarComponent } from './src/calendar/calendar';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

export const Calendar: any[] = [
    CalendarComponent
];

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        CalendarComponent
    ],
    exports: [
        CalendarComponent
    ]
})

export class CalendarModule {

}
