import { Injectable} from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class UserAuthService extends AuthService {
    count = 0;

    incrementCount(){
        this.count++; 
    }

    getSomeMsg(): string{
        return "Hi.. I'm UserAuthService. I increment step-wise.";
    }

    getUserName(): string {
        return localStorage.getItem('userName');
    }

    getUserEmail(): string {
        return localStorage.getItem('userEmail');
    }

    getUserId(): string {
        return localStorage.getItem('userId');
    }

    setUserName(userName): void {
        localStorage.setItem('userName', userName);
    }

    setUserEmail(userEmail): void {
        localStorage.setItem('userEmail', userEmail);
    }

    setUserId(userId): void {
        localStorage.setItem('userId', userId);
    }
    
    isLoggedIn(): boolean {
        if ( this.getUserName() && this.getUserEmail() && this.getUserId() ) {
            return true;
        }
        return false;
    }
    
}