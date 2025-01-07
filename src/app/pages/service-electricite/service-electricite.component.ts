import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-service-electricite',
  standalone: true,
  imports: [],
  templateUrl: './service-electricite.component.html',
  styleUrl: './service-electricite.component.scss'
})
export class ServiceElectriciteComponent {
  constructor(private router:Router){}
  RetourEnBack() {
    this.router.navigate(['/pages/service']);
  }
}
