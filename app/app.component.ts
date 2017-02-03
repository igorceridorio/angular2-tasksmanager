import { Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
      <div class="col-sm-12">
        <h1>Task Manager Ultra Plus</h1>
        <router-outlet></router-outlet>
      </div>
  </div>
  `
})

export class AppComponent  { }
