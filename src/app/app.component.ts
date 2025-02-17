import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Template-form-app';
  username: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  phone: string = "";
  submitted: boolean = false;
  showPassword = false;
  showConfirmPassword: boolean = false;



  onSubmit() {
    this.submitted = true;
  }
}
