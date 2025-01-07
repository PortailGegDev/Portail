import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Renderer2 } from '@angular/core';

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}
@Component({
  selector: 'ngx-faq',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'] // Notez le "styleUrls" au lieu de "styleUrl"
})
export class FAQComponent {
  faqs: FAQ[] = [];  // Typé correctement avec l'interface FAQ

  constructor(private http: HttpClient) { } // Injecter HttpClient

  ngOnInit() {
    this.loadFAQs();
  }

  loadFAQs() {
    this.http.get<{ faq: FAQ[] }>('assets/faq-data.json').subscribe(data => {
      this.faqs = data.faq; // Assigner directement les FAQs depuis le fichier JSON
    }, error => {
      console.error('Error loading FAQ data:', error);
    });
  }
  toggleDropdown(faq: FAQ, event: MouseEvent) {
    const target = event.target as HTMLElement;
    
    // Si le clic provient d'un lien, empêche la propagation pour ne pas fermer la réponse
    if (target.tagName.toLowerCase() === 'a') {
      event.stopPropagation();
    } else {
      // Alterne l'état d'ouverture seulement si faq.isOpen est false ou pour l'ouvrir
      faq.isOpen = !faq.isOpen || !faq.isOpen;
    }
  }
}
