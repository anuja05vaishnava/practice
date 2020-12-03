import { FormGroup, FormControl,Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

export class CreateComponent {
    title = 'Angular 4 Project!';
    todaydate;
    componentproperty;
    emailid;
    formdata;
    ngOnInit() {
       this.formdata = new FormGroup({
          emailid: new FormControl("", Validators.compose([
             Validators.required,
             Validators.pattern("[^ @]*@[^ @]*")
          ])),
          passwd: new FormControl("")
       });
    }
    onClickSubmit(data) {this.emailid = data.emailid;}
 }
