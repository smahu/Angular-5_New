import { Injectable} from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class NewAuthService extends AuthService {

    count = 0;

    incrementCount(){
        this.count += 2; // increment by 2 
    }

    getSomeMsg(): string{
        return "Hi.. I'm NewAuthService. I increment double..";
    }

    getUserName(): string {
        return sessionStorage.getItem('userName');
    }

    getUserEmail(): string {
        return sessionStorage.getItem('userEmail');
    }

    getUserId(): string {
        return sessionStorage.getItem('userId');
    }

    setUserName(userName): void {
        sessionStorage.setItem('userName', userName);
    }

    setUserEmail(userEmail): void {
        sessionStorage.setItem('userEmail', userEmail);
    }

    setUserId(userId): void {
        sessionStorage.setItem('userId', userId);
    }
    
    isLoggedIn(): boolean {
        if ( this.getUserName() && this.getUserEmail() && this.getUserId() ) {
            return true;
        }
        return false;
    }

}
