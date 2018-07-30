import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_estructuras/user'


@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.restURL}/users`);
    }

    getById(id: number) {
        return this.http.get(`${environment.restURL}/users/` + id);
    }

    register(user: User) {
        return this.http.post(`${environment.restURL}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${environment.restURL}/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.restURL}/users/` + id);
    }
}