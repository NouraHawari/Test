import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observer, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
/**
 * @export
 * @class CommunicationService
 */
@Injectable()
export class CommunicationService {
    
    constructor(private http: HttpClient) {
       
    }
    delete_account(user_id): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
      

        return this.http.post('http://localhost/ciflexi/api/Api_auth_admin/delete_user_accounts/'+user_id,{
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            }});
            
    }
    delete_group(id): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
      

        return this.http.post('http://localhost/ciflexi/api/Api_auth_admin/delete_user_group/'+id,{
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            }});
           
    }
    insert_group(data): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
      

        return this.http.post('http://localhost/ciflexi/api/Api_auth_admin/insert_user_group/',data,{
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            }});
           
    }
    update_account(data,uacc_id): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
      
        return this.http.post('http://localhost/ciflexi/api/Api_auth_admin/update_user_account/'+uacc_id,data,{
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            }});
        
    }
    update_group(data,id): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
      
        return this.http.post('http://localhost/ciflexi/api/Api_auth_admin/update_user_group/'+id,data,{
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            }});
        
    }
    getUsers(data): Observable<any> {
       
        return this.http.get('http://localhost/ciflexi/api/Api_auth_admin/manage_user_accounts');
    }
    getGroupByid(id): Observable<any> {
        //console.log(id);
         return this.http.get('http://localhost/ciflexi/api/Api_auth_admin/get_user_group_by_id/'+id);
       // return id;
     }
    getUsersByid(uacc_id): Observable<any> {
       //console.log(uacc_id);
        return this.http.get('http://localhost/ciflexi/api/Api_auth_admin/get_user_by_id/'+uacc_id);
      // return uacc_id;
    }
    getUserGroups(data): Observable<any> {
       
        return this.http.get('http://localhost/ciflexi/api/Api_auth_admin/manage_user_groups');
    }
    login(data): Observable<any> {
        let headers = new Headers({ 
            'Content-Type': 'application/json',
            'Connection': 'Keep-Alive' 
        });
        let options = new RequestOptions({ headers: headers });
        
        return this.http.post('http://localhost/ciflexi/api/Api_auth/login',data,{
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            }});
    }
    logout(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this.http.post('http://localhost/ciflexi/api/Api_auth/logout',{
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            }});
    }
    register(data): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this.http.post('http://localhost/ciflexi/api/Api_auth/register_account',data,{
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            }});
        }

        urlServicioLogin = "http://localhost/ciflexi/api/Api_auth/login";

        makeLogin (data): Observable<any> {
            let enco : any = new HttpHeaders()
                .set('Content-Type', 'application/json');
        
            let body : any = new HttpParams()
            .set('login_user', data.login_user)
            .set('login_identity', data.login_identity)
            .set('login_password', data.login_password);
           
            return this.http.post(this.urlServicioLogin,
             body.toString(),
             {
               headers: enco,withCredentials:true
             }
            );
        }

    createIntent(data): Observable<any> {
        return this.http.post("hhee"+ 'intents', data);
    }
    updateSkillById(data,id): Observable<any> {
        return this.http.put("hhee", data);
    }
    deleteGraph(skillId, id): Observable<any> {
        return this.http.delete("hhee" + skillId);
    }
}