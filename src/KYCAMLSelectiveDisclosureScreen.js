import React, { Component } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import btn_icon_back_kycamlselectivedisclosure from './images/btn_icon_back_kycamlselectivedisclosure.png';


// UI framework component imports
import Input from 'muicss/lib/react/input';
import Select from 'muicss/lib/react/select';
import Option from 'muicss/lib/react/option';
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';
import Checkbox from 'muicss/lib/react/checkbox';

export default class KYCAMLSelectiveDisclosureScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      checkbox: true,
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  // --- Functions for component state index 0 (1 of 2) --- 
  
  //first name
  textInputChanged_state0_elField = (event) => {
    console.log(`textInputChangedState0Field0 ${event.target.value}`)
    this.setState({field: event.target.value});
  }
  
  getValue_state0_elField = () => {
    return this.state.field || '';
  }
  
  //last name
  textInputChanged_state0_elField3 = (event) => {
    console.log(`textInputChangedState0Field3 ${event.target.value}`)
    this.setState({field3: event.target.value});
  }
  
  getValue_state0_elField3 = () => {
    return this.state.field3 || '';
  }
  
  //middle name
  textInputChanged_state0_elField2 = (event) => {
    console.log(`textInputChangedState0Field2 ${event.target.value}`)
    this.setState({field2: event.target.value});
  }
  
  getValue_state0_elField2 = () => {
    return this.state.field2 || '';
  }
  
  //email
  textInputChanged_state0_elField5 = (event) => {
    console.log(`textInputChangedState0Field5 ${event.target.value}`)
    this.setState({field5: event.target.value});
  }
  
  getValue_state0_elField5 = () => {
    return this.state.field5 || '';
  }
  
  //mobile
  textInputChanged_state0_elField6 = (event) => {
    console.log(`textInputChangedState0Field6 ${event.target.value}`)
    this.setState({field6: event.target.value});
  }
  
  getValue_state0_elField6 = () => {
    return this.state.field6 || '';
  }
  
  //address 1
  textInputChanged_state0_elField7 = (event) => {
    console.log(`textInputChangedState0Field7 ${event.target.value}`)
    this.setState({field7: event.target.value});
  }
  
  getValue_state0_elField7 = () => {
    return this.state.field7 || '';
  }
  
  //state province
  textInputChanged_state0_elField10 = (event) => {
    console.log(`textInputChangedState0Field10 ${event.target.value}`)
    this.setState({field10: event.target.value});
  }
  
  getValue_state0_elField10 = () => {
    return this.state.field10 || '';
  }
  
  //city
  textInputChanged_state0_elField9 = (event) => {
    console.log(`textInputChangedState0Field9 ${event.target.value}`)
    this.setState({field9: event.target.value});
  }
  
  getValue_state0_elField9 = () => {
    return this.state.field9 || '';
  }
  
  //address 2
  textInputChanged_state0_elField8 = (event) => {
    console.log(`textInputChangedState0Field8 ${event.target.value}`)
    this.setState({field8: event.target.value});
  }
  
  getValue_state0_elField8 = () => {
    return this.state.field8 || '';
  }
  
  //country
  textInputChanged_state0_elField11 = (event) => {
    console.log(`textInputChangedState0Field11 ${event.target.value}`)
    this.setState({field11: event.target.value});
  }
  
  getValue_state0_elField11 = () => {
    return this.state.field11 || '';
  }
  
  //postal code zip code
  textInputChanged_state0_elField12 = (event) => {
    console.log(`textInputChangedState0Field12 ${event.target.value}`)
    this.setState({field12: event.target.value});
  }
  
  getValue_state0_elField12 = () => {
    return this.state.field12 || '';
  }
  
  
  getValue_state0_elPicker = () => {
    return this.state.picker !== undefined ? this.state.picker : '';
  }
  
  //DOB
  pickerValueChanged_state0_elPicker = (date) => {
    console.log(`elPicker ${date.toString()}`)
    this.setState({picker: date.toString()});
  }
  
  
  getValue_state0_elPicker2 = () => {
    return this.state.picker2 !== undefined ? this.state.picker2 : '';
  }
  
  //country of birth
  pickerValueChanged_state0_elPicker2 = (event) => {
    console.log(`elPicker2 ${event.target.value}`)
    this.setState({picker2: event.target.value});
  }
  
  getValue_state0_elCheckbox348561= () => {
    return this.state.checkbox !== undefined ? this.state.checkbox : 'false';
  }
  
  checkboxChanged_state0_elCheckbox348561 = (event) => {
    this.setState({checkbox: (event.target.checked ? 'true' : 'false')}, async () => {
      // Write your script here
      alert(`${this.state.checkbox}`)
      
    });
  }
  
  getValue_state0_elPicker3 = () => {
    return this.state.picker3 !== undefined ? this.state.picker3 : '';
  }
  
  //current country of citizenship
  pickerValueChanged_state0_elPicker3 = (event) => {
    console.log(`elPicker3 ${event.target.value}`)
    this.setState({picker3: event.target.value});
  }
  
  //height
  textInputChanged_state0_elField4 = (event) => {
    console.log(`textInputChangedState0Field4 ${event.target.value}`)
    this.setState({field4: event.target.value});
  }
  
  getValue_state0_elField4 = () => {
    return this.state.field4 || '';
  }
  
  
  getValue_state0_elPicker5 = () => {
    return this.state.picker5 !== undefined ? this.state.picker5 : '';
  }
  
  //hair color
  pickerValueChanged_state0_elPicker5 = (event) => {
    console.log(`elPicker5 ${event.target.value}`)
    this.setState({picker5: event.target.value});
  }
  
  
  getValue_state0_elPicker4 = () => {
    return this.state.picker4 !== undefined ? this.state.picker4 : '';
  }
  
  //eye color
  pickerValueChanged_state0_elPicker4 = (event) => {
    console.log(`elPicker4 ${event.target.value}`)
    this.setState({picker4: event.target.value});
  }
  
  //weight
  textInputChanged_state0_elField13 = (event) => {
    console.log(`textInputChangedState0Field13 ${event.target.value}`)
    this.setState({field13: event.target.value});
  }
  
  getValue_state0_elField13 = () => {
    return this.state.field13 || '';
  }
  
  onClick_state0_elButton = async() => {
    console.log(`onClick Save & Exit`)
  }

  onClick_state0_elButton2 = async () => {
    // Go to screen 'Supporting Document Upload'
    console.log(`onClick_state0_elButton2 go to supporting doc upload`)
    this.props.appActions.goToScreen('supportingDocumentUpload', { ...this.props, transitionId: 'slideIn_bottom' });
  
  }
  
  //template
  textInputChanged_state0_elField16 = (event) => {
    console.log(`textInputChangedState0Field16 ${event.target.value}`)
    this.setState({field16: event.target.value});
  }
  
  getValue_state0_elField16 = () => {
    return this.state.field16 || '';
  }
  
  renderState0() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_state0_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_state0_elBackground_outer = {
      boxSizing: 'border-box',
      backgroundColor: '#f6f6f6',
     };
    
    const style_state0_elField = {
      display: 'block',
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_state0_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state0_elField3 = {
      display: 'block',
      paddingTop: 0,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_state0_elField2 = {
      display: 'block',
      paddingTop: 0,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_state0_elField5 = {
      display: 'block',
      paddingTop: 0,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_state0_elField6 = {
      display: 'block',
      paddingTop: 0,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_state0_elField7 = {
      display: 'block',
      paddingTop: 0,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_state0_elField10 = {
      display: 'block',
      paddingTop: 0,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_state0_elField9 = {
      display: 'block',
      paddingTop: 0,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_state0_elField8 = {
      display: 'block',
      paddingTop: 0,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_state0_elField11 = {
      display: 'block',
      paddingTop: 0,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_state0_elField12 = {
      display: 'block',
      paddingTop: 0,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    
    let selection_picker2 = this.getValue_state0_elPicker2();
    const items_picker2 = [
      {"label": "Canada", "value": "canada"},
      {"label": "Philippines", "value": "philippines"},
      {"label": "United States", "value": "united states"},
    ];
    
    const style_state0_elPicker2 = {
      pointerEvents: 'auto',
     };
    
     let checked_checkbox = this.getValue_state0_elCheckbox348561();
    
     const style_state0_elCheckbox348561 = {
       cursor: 'pointer',
       pointerEvents: 'auto',
      };

    let selection_picker3 = this.getValue_state0_elPicker3();
    const items_picker3 = [
      {"label": "Canadian", "value": "canadian"},
      {"label": "Filipino", "value": "filipino"},
      {"label": "United States", "value": "American"},
      {"label": "Barbados", "value": "Bagian"},
    ];
    
    const style_state0_elPicker3 = {
      pointerEvents: 'auto',
     };
    const style_state0_elText3 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_state0_elText2 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state0_elField4 = {
      display: 'block',
      paddingTop: 0,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    let selection_picker5 = this.getValue_state0_elPicker5();
    const items_picker5 = [
      {"label": "Black", "value": "black"},
      {"label": "Brown", "value": "brown"},
    ];
    
    const style_state0_elPicker5 = {
      pointerEvents: 'auto',
     };
    const style_state0_elText5 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_state0_elText4 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    let selection_picker4 = this.getValue_state0_elPicker4();
    const items_picker4 = [
      {"label": "Black", "value": "black"},
      {"label": "Brown", "value": "brown"},
    ];
    
    const style_state0_elPicker4 = {
      pointerEvents: 'auto',
     };
    
    const style_state0_elField13 = {
      display: 'block',
      paddingTop: 0,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_state0_elButton = {
      display: 'block',
      color: '(null)',
      cursor: 'pointer',
      textAlign: 'center',
      pointerEvents: 'auto',
     };
    
    const style_state0_elButton2 = {
      display: 'block',
      color: '(null)',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    const style_state0_elField16 = {
      display: 'block',
      paddingTop: 0,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen KYCAMLSelectiveDisclosureScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight state0_elBackground" style={style_state0_elBackground_outer}>
            <div className="appBg" style={style_state0_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="state0_elSpacer">
            <div />
          </div>
          
          <div className="state0_elField">
            <Input className="baseFont" style={style_state0_elField} type="text" label={this.props.locStrings.start_field_36127} floatingLabel={true} onChange={this.textInputChanged_state0_elField} value={this.getValue_state0_elField()}  />
          </div>
          
          <div className="state0_elText">
            <div className="baseFont" style={style_state0_elText}>
              <div>{this.props.locStrings.start_text_496034}</div>
            </div>
          </div>
          
          <div className="state0_elField3">
            <Input className="baseFont" style={style_state0_elField3} type="text" placeholder={this.props.locStrings.start_field3_183468} onChange={this.textInputChanged_state0_elField3} value={this.getValue_state0_elField3()}  />
          </div>
          
          <div className="state0_elField2">
            <Input className="baseFont" style={style_state0_elField2} type="text" placeholder={this.props.locStrings.start_field2_466773} onChange={this.textInputChanged_state0_elField2} value={this.getValue_state0_elField2()}  />
          </div>
          
          <div className="state0_elField5">
            <Input className="baseFont" style={style_state0_elField5} type="email" placeholder={this.props.locStrings.start_field5_63847} onChange={this.textInputChanged_state0_elField5} value={this.getValue_state0_elField5()}  />
          </div>
          
          <div className="state0_elField6">
            <Input className="baseFont" style={style_state0_elField6} type="tel" placeholder={this.props.locStrings.start_field6_578260} onChange={this.textInputChanged_state0_elField6} value={this.getValue_state0_elField6()}  />
          </div>
          
          <div className="state0_elCheckbox348561">
            <Checkbox className="baseFont" style={style_state0_elCheckbox348561}  label={this.props.locStrings.kycamlselectivedisclosure_checkbox_348561} checked={checked_checkbox === 'true' || checked_checkbox === true || ''+checked_checkbox === '1'}  onChange={this.checkboxChanged_state0_elCheckbox348561} />
          </div>

          <div className="state0_elField7">
            <Input className="baseFont" style={style_state0_elField7} type="text" placeholder={this.props.locStrings.start_field7_656794} onChange={this.textInputChanged_state0_elField7} value={this.getValue_state0_elField7()}  disabled = {this.getValue_state0_elCheckbox348561()} />
          </div>
          
          <div className="state0_elField10">
            <Input className="baseFont" style={style_state0_elField10} type="text" placeholder={this.props.locStrings.start_field10_791713} onChange={this.textInputChanged_state0_elField10} value={this.getValue_state0_elField10()}  />
          </div>
          
          <div className="state0_elField9">
            <Input className="baseFont" style={style_state0_elField9} type="text" placeholder={this.props.locStrings.start_field9_573875} onChange={this.textInputChanged_state0_elField9} value={this.getValue_state0_elField9()}  />
          </div>
          
          <div className="state0_elField8">
            <Input className="baseFont" style={style_state0_elField8} type="text" placeholder={this.props.locStrings.start_field8_35435} onChange={this.textInputChanged_state0_elField8} value={this.getValue_state0_elField8()}  />
          </div>
          
          <div className="state0_elField11">
            <Input className="baseFont" style={style_state0_elField11} type="text" placeholder={this.props.locStrings.start_field11_380811} onChange={this.textInputChanged_state0_elField11} value={this.getValue_state0_elField11()}  />
          </div>
          
          <div className="state0_elField12">
            <Input className="baseFont" style={style_state0_elField12} type="text" placeholder={this.props.locStrings.start_field12_354434} onChange={this.textInputChanged_state0_elField12} value={this.getValue_state0_elField12()}  />
          </div>
          
          <div className="state0_elPicker">
            <DatePicker className="baseFont"  onChange={this.pickerValueChanged_state0_elPicker} selected={Date.parse(this.getValue_state0_elPicker())}  />
          </div>
          
          <div className="state0_elPicker2">
            <Select className="baseFont" style={style_state0_elPicker2}  onChange={this.pickerValueChanged_state0_elPicker2} value={selection_picker2} >
              {items_picker2.every(item => {
                return item.value !== selection_picker2;
              }) ? <Option value=''/> : null}
              {items_picker2.map(item => {
                return <Option value={item.value} label={item.label} />
              })}
            </Select>
          </div>
          
          <div className="state0_elPicker3">
            <Select className="baseFont" style={style_state0_elPicker3}  onChange={this.pickerValueChanged_state0_elPicker3} value={selection_picker3} >
              {items_picker3.every(item => {
                return item.value !== selection_picker3;
              }) ? <Option value=''/> : null}
              {items_picker3.map(item => {
                return <Option value={item.value} label={item.label} />
              })}
            </Select>
          </div>
          
          <div className="state0_elText3">
            <div className="baseFont" style={style_state0_elText3}>
              <div>{this.props.locStrings.start_text3_398402}</div>
            </div>
          </div>
          
          <div className="state0_elText2">
            <div className="baseFont" style={style_state0_elText2}>
              <div>{this.props.locStrings.start_text2_601827}</div>
            </div>
          </div>
          
          <div className="state0_elField4">
            <Input className="baseFont" style={style_state0_elField4} type="text" placeholder={this.props.locStrings.start_field4_92655} onChange={this.textInputChanged_state0_elField4} value={this.getValue_state0_elField4()}  />
          </div>
          
          <div className="state0_elPicker5">
            <Select className="baseFont" style={style_state0_elPicker5}  onChange={this.pickerValueChanged_state0_elPicker5} value={selection_picker5} >
              {items_picker5.every(item => {
                return item.value !== selection_picker5;
              }) ? <Option value=''/> : null}
              {items_picker5.map(item => {
                return <Option value={item.value} label={item.label} />
              })}
            </Select>
          </div>
          
          <div className="state0_elText5">
            <div className="baseFont" style={style_state0_elText5}>
              <div>{this.props.locStrings.kycamlselectivedisclosure_text5_791974}</div>
            </div>
          </div>
          
          <div className="state0_elText4">
            <div className="baseFont" style={style_state0_elText4}>
              <div>{this.props.locStrings.kycamlselectivedisclosure_text4_110214}</div>
            </div>
          </div>
          
          <div className="state0_elPicker4">
            <Select className="baseFont" style={style_state0_elPicker4}  onChange={this.pickerValueChanged_state0_elPicker4} value={selection_picker4} >
              {items_picker4.every(item => {
                return item.value !== selection_picker4;
              }) ? <Option value=''/> : null}
              {items_picker4.map(item => {
                return <Option value={item.value} label={item.label} />
              })}
            </Select>
          </div>
          
          <div className="state0_elField13">
            <Input className="baseFont" style={style_state0_elField13} type="text" placeholder={this.props.locStrings.start_field13_337271} onChange={this.textInputChanged_state0_elField13} value={this.getValue_state0_elField13()}  />
          </div>
          
          <div className="state0_elButton">
            <Button className="actionFont" style={style_state0_elButton}  color="accent" onClick={this.onClick_state0_elButton}>
              {this.props.locStrings.start_button_473638}
            </Button>
          </div>
          
          <div className="state0_elButton2">
            <Button className="actionFont" style={style_state0_elButton2}  color="accent" onClick={this.onClick_state0_elButton2} >
              {this.props.locStrings.start_button2_848272}
            </Button>
          </div>
          
          <div className="state0_elField16">
            <Input className="baseFont" style={style_state0_elField16} type="text" placeholder={this.props.locStrings.kycamlselectivedisclosure_field16_773248} onChange={this.textInputChanged_state0_elField16} value={this.getValue_state0_elField16()}  />
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">KYC/AML Selective Disclosure</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_kycamlselectivedisclosure} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 2) --- 
  
  renderState1() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    
    return (
      <div className="AppScreen KYCAMLSelectiveDisclosureScreen" style={baseStyle}>
        <Appbar className="navBar">
          <div className="title">KYC/AML Selective Disclosure</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_kycamlselectivedisclosure} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  
  
  render() {
    switch (0) {
      default:
      case 0:
        return this.renderState0();
      case 1:
        return this.renderState1();
    }
  }
  
}
