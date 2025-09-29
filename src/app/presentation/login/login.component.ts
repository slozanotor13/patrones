import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserApiService } from 'src/app/infrastructure/user_api/user_api.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  emailExistsResult: boolean | null = null;
  userId: number | null = null;
  photos: any[] = [];

  constructor(
    private fb: FormBuilder,
    private userApiService: UserApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;

      // Paso 1: Obtener el usuario completo por su email
      this.userApiService.getUserByEmail(email).subscribe(user => {
        if (user) {
          this.emailExistsResult = true;
          this.userId = user.id;

 this.userApiService.getPosts().pipe(
  map(posts => posts.filter(post => post.userId == this.userId))
).subscribe(filteredPosts => {
  if (filteredPosts.length > 0) {
    this.router.navigate(['/panel'], {
      state: {
        userId: this.userId,
        posts: filteredPosts
      }
    });
  } else {
    // Si no hay posts, mostrar mensaje o manejarlo
    console.log('No hay posts para este usuario.');
  }
});


        } else {
          this.emailExistsResult = false;
          this.userId = null;
          this.photos = [];
        }
      });
    }
  }
}
