import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-mask-view',
  template: `
  <h1> Input Mask Examples </h1>

  
    <label>Phone:</label>
    <input pr-mask="(999) 999-9999"><br>

    <label>International Number</label>
    <input pr-mask="+99 999 99 99 99"><br>

    <label>Credit Card</label>
    <input pr-mask="9999 9999 9999 9999"><br>


    <label>VAT Number</label>
    <input pr-mask="AA-9999 9999 9999 9999"><br>

    <label>Date</label>
    <input pr-mask="39/19/9999"><br>

    <label>Text</label>
    <input value="ABCD"><br>
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
export class PrMaskViewComponent {}
