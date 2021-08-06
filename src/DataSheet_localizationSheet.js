// eslint-disable-next-line
import React from 'react';
import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text_788538";
    item['en'] = "Fullname";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text2_152874";
    item['en'] = "Middle Name";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text3_478729";
    item['en'] = "Lastname";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text4_286039";
    item['en'] = "DOB";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text5_486307";
    item['en'] = "Email";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text6_74009";
    item['en'] = "Mobile Number";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text7_199217";
    item['en'] = "Address 1";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text8_946168";
    item['en'] = "Address 2";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text9_913763";
    item['en'] = "City";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text10_813755";
    item['en'] = "State/Province";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text11_783578";
    item['en'] = "Country";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text12_883504";
    item['en'] = "Zip Code/Postal Code";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text13_984174";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_field_36127";
    item['en'] = "First Name";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_field2_466773";
    item['en'] = "Middle Name";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_field3_183468";
    item['en'] = "Last Name";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_field4_18294";
    item['en'] = "DOB";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_field5_63847";
    item['en'] = "Email";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_field6_578260";
    item['en'] = "Mobile Number";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_field7_656794";
    item['en'] = "Address 1";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_field8_35435";
    item['en'] = "Address 2";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_field9_573875";
    item['en'] = "City";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_field10_791713";
    item['en'] = "State/Province";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_field11_380811";
    item['en'] = "Country";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_field12_354434";
    item['en'] = "Zip Code/Postal Code";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_351422";
    item['en'] = "Next";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button2_321510";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text_496034";
    item['en'] = "DOB";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text2_601827";
    item['en'] = "Country Of Birth";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text3_398402";
    item['en'] = "Country of Current Citizenship";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_field4_92655";
    item['en'] = "Height";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_field13_337271";
    item['en'] = "Weight";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_field14_510001";
    item['en'] = "Eye Color";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_field15_466082";
    item['en'] = "Hair Color";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_473638";
    item['en'] = "Save and Exit";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text4_42180";
    item['en'] = "Select  Supporting Documents to Uploads";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button2_848272";
    item['en'] = "Upload Supporting Documents";
    
    item = {};
    this.items.push(item);
    item['key'] = "supportingdocumentupload_text_1028146";
    item['en'] = "Select Document Type to Upload";
    
    item = {};
    this.items.push(item);
    item['key'] = "supportingdocumentupload_text2_739229";
    item['en'] = "Select Document to Upload";
    
    item = {};
    this.items.push(item);
    item['key'] = "supportingdocumentupload_button_699108";
    item['en'] = "Upload File";
    
    item = {};
    this.items.push(item);
    item['key'] = "supportingdocumentupload_button2_1001487";
    item['en'] = "Take a Selfie";
    
    item = {};
    this.items.push(item);
    item['key'] = "kycamlselectivedisclosure_text4_580155";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "kycamlselectivedisclosure_field16_773248";
    item['en'] = "Save Data Set Template As";
    
    item = {};
    this.items.push(item);
    item['key'] = "kycamlselectivedisclosure_text4_110214";
    item['en'] = "Eye Color";
    
    item = {};
    this.items.push(item);
    item['key'] = "kycamlselectivedisclosure_text5_791974";
    item['en'] = "Hair Color";
    
    item = {};
    this.items.push(item);
    item['key'] = "kycamlselectivedisclosure_iconbutton_50283";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "kycamlselectivedisclosure_iconbutton2_201316";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "kycamlselectivedisclosure_checkbox_234294";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "kycamlselectivedisclosure_checkbox_596148";
    item['en'] = " ";
    
    let storedItems = localStorage.getItem(this.id);
    if (storedItems != null) {
      this.items = JSON.parse(storedItems);
    }
  }

  addItem(item, options) {
    super.addItem(item, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  removeItem(item, options) {
    super.removeItem(item, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  replaceItemByRowIndex(idx, newItem, options) {
    super.replaceItemByRowIndex(idx, newItem, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
