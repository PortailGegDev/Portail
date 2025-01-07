import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-option-verte',
  standalone: true,
  imports: [],
  templateUrl: './option-verte.component.html',
  styleUrl: './option-verte.component.scss'
})
export class OptionVerteComponent {
  constructor(private router:Router){}
  RetourEnBack() {
    this.router.navigate(['/pages/service']);
  }
}
