import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,HomeComponent,HeaderComponent],
  template:`
    <app-header/>
   <main>
     <app-home/>
     <router-outlet></router-outlet> <!-- Added RouterOutlet here -->

    </main>
  `,
  styleUrl: './app.component.css'

})

export class AppComponent {
  title = 'firstApp';
}
