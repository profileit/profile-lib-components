import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-input-view',
  template: `
  <h1>Font Awesome</h1>

  <div class="form">

      <div class="form-row">
          <label>Normal Input:</label>
          <input class="normal-input" type="email"
                 name="email" placeholder="E-mail" autocomplete="off">
      </div>

      <div class="form-row">
          <label>Email:</label>

          <pr-fa-input id="email-field" icon="envelope" style="height:250px">
              <input type="email" name="email" placeholder="Email" autocomplete="off" class="test-class">
          </pr-fa-input>

      </div>

      <div class="form-row">
          <label>Password:</label>
          <pr-fa-input id="password-field" icon="lock" >
              <input placeholder="Password" class="test-class">
          </pr-fa-input>
      </div>
<!-- cunado la clase pr-fa-input-red-theme esta aplicada en algun div que envulve un pr-fa-input aplica ese estilo y no el que tiene por defecto -->
      <div class="form-row stripe-field pr-fa-input-red-theme">
          <label>Stripe:</label>
          <pr-fa-input  icon="cc-stripe">
              <input placeholder="Stripe">
          </pr-fa-input>
      </div>

      <div class="form-row">
          <label>Paypal:</label>
          <pr-fa-input icon="paypal">
              <input placeholder="Paypal">
          </pr-fa-input>
      </div>

      <h1>Material Design</h1>

      <div class="form-row">
          <label>Lock:</label>
          <pr-md-input icon="search">
              <input type="email" name="email" placeholder="E-mail">
          </pr-md-input>
      </div>

      <div class="form-row">
          <label>Id Number:</label>
          <pr-md-input icon="perm_identity">
              <input type="email" name="email" placeholder="E-mail">
          </pr-md-input>
      </div>

      <div class="form-row">
          <label>Receipt Number:</label>
          <pr-md-input icon="receipt">
              <input type="email" name="email" placeholder="E-mail">
          </pr-md-input>
      </div>

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
export class PrInputViewComponent {}
