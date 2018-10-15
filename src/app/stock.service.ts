import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable( {
    providedIn: 'root'
})

export class StockService {

    private baseUrl = 'http://localhost:8080/api/';

    constructor(private http: HttpClient) { }

    getStock(stock_id: number): Observable<Object> {
        return this.http.get(`${this.baseUrl}/${stock_id}`);
    }

    createStock(stock: Object): Observable<object> {
        return this.http.post(`${this.baseUrl}` + `/create`, stock);
    }

    getStockList(): Observable<any> {
        return this.http.get(`${this.baseUrl}` + `/stocks`);
    }
}
