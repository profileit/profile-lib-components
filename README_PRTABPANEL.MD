PrTabPanel Example

```xml
<!-- You can now use your library component in app.component.html -->
<ng-template #headerButtons>

    <button (click)="tabPanelButtons.selectTab(loginTabButtons)">Login</button>
    <button (click)="tabPanelButtons.selectTab(signUpTabButtons)">Sign Up</button>

</ng-template>

<pr-tab-panel #tabPanelButtons [headerTemplate]="headerButtons">
  <pr-tab title="Login" #loginTabButtons [selected]="false">
      <form>
          <div class="form-field">
              <label>Email:</label><input class="login-email">
          </div>
          <div class="form-field">
              <label>Password:</label><input>
          </div>
      </form>
  </pr-tab>

  <pr-tab title="Sign Up" #signUpTabButtons [selected]="false">
      <form>
          <div class="form-field">
              <label>Email:</label><input>
          </div>
          <div class="form-field">
              <label>Password:</label><input>
          </div>
          <div class="form-field">
              <label>Confirm Password:</label><input>
          </div>
      </form>
  </pr-tab>

  <pr-tab title="Contact" [selected]="true">
      <form>
          <div class="form-field">
              <label>Email:</label><input class="contact-email">
          </div>
          <div class="form-field">
              <label>Message:</label>
              <textarea></textarea>
          </div>
      </form>
  </pr-tab>
</pr-tab-panel>

<br><br>

<pr-tab-panel id="tab-panel" #tabPanel>

    <pr-tab title="Login" #loginTab [selected]="false">
        <form>
            <div class="form-field">
                <label>Email:</label><input class="login-email">
            </div>
            <div class="form-field">
                <label>Password:</label><input>
            </div>
        </form>
    </pr-tab>

    <pr-tab title="Sign Up" #signUpTab [selected]="false">
        <form>
            <div class="form-field">
                <label>Email:</label><input>
            </div>
            <div class="form-field">
                <label>Password:</label><input>
            </div>
            <div class="form-field">
                <label>Confirm Password:</label><input>
            </div>
        </form>
    </pr-tab>

    <pr-tab title="Contact" [selected]="true">
        <form>
            <div class="form-field">
                <label>Email:</label><input class="contact-email">
            </div>
            <div class="form-field">
                <label>Message:</label>
                <textarea></textarea>
            </div>
        </form>
    </pr-tab>

</pr-tab-panel>
```

Go back to [README](README.MD "README").