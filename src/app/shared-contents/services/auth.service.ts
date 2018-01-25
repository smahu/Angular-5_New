import { Injectable} from '@angular/core';

@Injectable()
export abstract class AuthService {

    abstract count;
    abstract incrementCount(): void;
    abstract getSomeMsg(): String;

    abstract getUserName(): String;

    abstract getUserEmail(): String;

    abstract getUserId(): String;

    abstract setUserName(userName): void;

    abstract setUserEmail(userEmail): void;

    abstract setUserId(userId): void;
    
    abstract isLoggedIn(): boolean;

}
