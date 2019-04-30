import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-modal-view',
  template: `
  <h1>Modal Examples</h1>

    <ng-template #authModalBody let-loginTabActive="loginTabActive">

        <pr-tab-panel>
            <pr-tab title="Login" [selected]="loginTabActive">
                <form>
                    <div class="form-field">
                        <pr-fa-input id="email-field" icon="envelope">
                            <input prInput type="email" name="email"
                                   placeholder="Email" autocomplete="off">
                        </pr-fa-input>
                    </div>
                    <div class="form-field">
                        <pr-fa-input icon="lock">
                            <input prInput type="password" name="email"
                                   placeholder="Password" autocomplete="off">
                        </pr-fa-input>
                    </div>
                </form>
            </pr-tab>
            <pr-tab title="Sign Up" [selected]="!loginTabActive">
                <form>
                    <div class="form-field">
                        <pr-fa-input icon="envelope">
                            <input prInput type="email" name="email"
                                   placeholder="Email" autocomplete="off">
                        </pr-fa-input>
                    </div>
                    <div class="form-field">
                        <pr-fa-input icon="lock">
                            <input prInput type="password" name="email"
                                   placeholder="Password" autocomplete="off">
                        </pr-fa-input>
                    </div>
                    <div class="form-field">
                        <pr-fa-input icon="lock">
                            <input prInput type="password" name="email"
                                   placeholder="Confirm Password" autocomplete="off">
                        </pr-fa-input>
                    </div>
                </form>
            </pr-tab>
        </pr-tab-panel>

    </ng-template>


    <pr-modal #modal [hideOnClickOutside]="false" [hideOnEsc]="true"
              [body]="authModalBody"
              [context]="{loginTabActive: loginActive}"
              *prModalOpenOnClick="[loginButton, signUpButton]">

        <i class="fa fa-times" (click)="modal.close()"></i>


    </pr-modal>


    <pr-modal id="testModal" *prModalOpenOnClick="testButton">I'm being projected</pr-modal>

    <div class="modal-buttons">

        <button #loginButton (click)="setLoginActive(true)">Login</button>

        <button #signUpButton (click)="setLoginActive(false)">Sign Up</button>

        <button id="testButton" #testButton>Test</button>

    </div>
  `,
  styles: [`
  label {
    width: 100px;
    text-align: right;
  }

  .form-row {
    width:500px;
    margin-bottom: 10px;
  }


  input {
    height: 25px;
  }

  .normal-input {
      width:150px;
  }

  h1 {
    text-align: center;
    margin-bottom: 30px;
    margin-top: 50px;
  }
`]
})
export class PrModalViewComponent {

  loginActive = true;

  setLoginActive(loginActive: any) {
    this.loginActive = loginActive;
  }

}
