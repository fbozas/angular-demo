import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector : 'courses',
    template: `
    <button class="btn btn-primary" [style.backgroundColor] = "isActive ? 'blue': 'red'">Submit</button>`
})
export class CoursesComponent{
   isActive = true;
}