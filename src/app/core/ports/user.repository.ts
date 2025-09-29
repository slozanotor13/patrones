
import { Observable } from 'rxjs';
import { User } from '../domain/user.entity';

export abstract class UserRepository {
  abstract getAllUsers(): Observable<User[]>;
  abstract emailExists(email: string): Observable<boolean>;
  
}
