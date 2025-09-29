// user-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRepository } from 'src/app/core/ports/user.repository';
import { Post, User } from 'src/app/core/domain/user.entity';
import { Observable, map } from 'rxjs';
import { Photo } from 'src/app/core/domain/image.entity';

@Injectable({
  providedIn: 'root'
})
export class UserApiService implements UserRepository {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  emailExists(email: string): Observable<boolean> {
    return this.getAllUsers().pipe(
      map(users => users.some(u => u.email.toLowerCase() === email.toLowerCase()))
    );
  }
  getUserByEmail(email: string): Observable<any> {
  return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
    .pipe(
      map(users => users.find(user => user.email.toLowerCase() === email.toLowerCase()))
    );
}
  getPhotosByAlbumId(albumId: number): Observable<Photo[]> {
  return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
}
getPosts(): Observable<Post[]> {
  return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
}
}
