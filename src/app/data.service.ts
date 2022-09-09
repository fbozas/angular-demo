import {HttpClient} from '@angular/common/http';

export class DataService{
    constructor(private url: string, private http: HttpClient){}

    getAll(){
        return this.http.get(this.url);
    }

    get(id: number){
        return this.http.get(`${this.url}/${id}`)
    }
    
    create(resource: any){
        return this.http.post(this.url,resource);
    }

    update(resource: any){
        return this.http.put(`${this.url}/${resource.id}`, resource);
    }

    delete(id: number){
        return this.http.delete(`${this.url}/${id}`);
    }
}
