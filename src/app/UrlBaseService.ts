import { Injectable } from "@angular/core";

@Injectable ({
    providedIn: 'root'
})

export class UrlBaseService {
    private baseUrl: string = "http://localhost:3000"

    getUrl(): string {
        return(this.baseUrl);
    }
}