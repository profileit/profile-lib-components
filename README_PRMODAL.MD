PrModal Example

```typescript
loginActive = true;

setLoginActive(loginActive: any) {
    this.loginActive = loginActive;
}
```

```xml
<!-- You can now use your library component in app.component.html -->
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
```

Go back to [README](README.MD "README").