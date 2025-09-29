import { Injectable } from '@angular/core';
import { UserRepository } from '../ports/user.repository';
import { Observable } from 'rxjs';
import { User } from '../domain/user.entity';

@Injectable({
  providedIn: 'root',
})
export class GetUsersUseCase {
  constructor(private userRepo: UserRepository) {}

  execute(): Observable<User[]> {
    return this.userRepo.getAllUsers();
  }
}
