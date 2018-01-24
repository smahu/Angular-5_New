import { Injectable} from '@angular/core';

@Injectable()
export class UserAuthService {

    getSomeMsg(){
        return "Hi.. I'm UserAuthService.";
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

    setUserName(userName) {
        localStorage.setItem('userName', userName);
    }

    setUserEmail(userEmail) {
        localStorage.setItem('userEmail', userEmail);
    }

    setUserId(userId) {
        localStorage.setItem('userId', userId);
    }


    isLoggedIn() {
        if ( this.getUserName() && this.getUserEmail() && this.getUserId() ) {
            return true;
        }
        return false;
    }

}
