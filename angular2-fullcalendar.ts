import { NgModule, ModuleWithProviders } from "@angular/core";
import { CalendarComponent } from './src/calendar/calendar';
import { CommonModule } from "@angular/common";

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
    static(): ModuleWithProviders {
        return {
            ngModule: CalendarModule,
            providers: []
        };
    }
}
