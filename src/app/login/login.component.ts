import { Component, OnInit ,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { FormBuilder,FormGroup, Validators }   from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 form: FormGroup;
 email:any;
 password:any;
 constructor(public router: Router, public _FB: FormBuilder) { 
 	
 }

  ngOnInit() {
  	this.form = this._FB.group({
      'email': ['', [Validators.required]],
      'password': ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]]
    });
  	//console.log('login page');
  }

doLogin(userinfo):void
{
console.log("Login",userinfo);
// You Auth success code is here
this.router.navigate(['/home']);
}

}
