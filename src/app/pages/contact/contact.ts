import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private fb = inject(FormBuilder);
  private title = inject(Title);
  private meta = inject(Meta);

  readonly contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.maxLength(120)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    website: [''], // honeypot
  });

  submitted = false;
  sending = false;
  success = false;
  error: string | null = null;

  constructor() {
    this.title.setTitle('Contact — YMDEV');
    this.meta.updateTag({
      name: 'description',
      content:
        'Get in touch with YMDEV. Send a message about your project: Web Apps, SaaS, APIs, Cloud & DevOps.',
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.error = null;

    // Honeypot spam check
    if (this.contactForm.value.website) {
      return; // silently ignore
    }

    if (this.contactForm.invalid) {
      return;
    }

    this.sending = true;
    // Simulate submission; integrate with backend or email service later
    setTimeout(() => {
      this.sending = false;
      this.success = true;
      this.contactForm.reset();
    }, 800);
  }
}