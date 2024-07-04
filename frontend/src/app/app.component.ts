import { Component } from '@angular/core';
import { ChatFormComponent } from './components/chat-form/chat-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      ChatFormComponent,
      RouterOutlet
  ],
  providers: [HttpClientModule],
  template: `
    <div class="max-w-md mx-auto">
      <h1 class="text-2xl my-8">{{ title }}</h1>
    </div>
    <div class="max-w-md mx-auto">
      <router-outlet></router-outlet>
    </div>
    
  `,
})
export class AppComponent {
  title = 'Chat App';
}
