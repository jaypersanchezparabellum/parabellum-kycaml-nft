import React, { Component } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import btn_icon_back_start from './images/btn_icon_back_start.png';

// UI framework component imports
import Input from 'muicss/lib/react/input';
import Select from 'muicss/lib/react/select';
import Option from 'muicss/lib/react/option';
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';

export default class StartScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  textInputChanged_elField = (event) => {
    this.setState({field: event.target.value});
  }
  
  getValue_elField = () => {
    return this.state.field || '';
  }
  
  textInputChanged_elField3 = (event) => {
    this.setState({field3: event.target.value});
  }
  
  getValue_elField3 = () => {
    return this.state.field3 || '';
  }
  
  textInputChanged_elField2 = (event) => {
    console.log(`textInputChanged_elField2 ${event.target.value}`)
    this.setState({field2: event.target.value});
  }
  
  getValue_elField2 = () => {
    console.log(`getValue_elField2 ${this.state.field2}`)
    return this.state.field2 || '';
  }
  
  textInputChanged_elField5 = (event) => {
    this.setState({field5: event.target.value});
  }
  
  getValue_elField5 = () => {
    return this.state.field5 || '';
  }
  
  textInputChanged_elField6 = (event) => {
    this.setState({field6: event.target.value});
  }
  
  getValue_elField6 = () => {
    return this.state.field6 || '';
  }
  
  textInputChanged_elField7 = (event) => {
    this.setState({field7: event.target.value});
  }
  
  getValue_elField7 = () => {
    return this.state.field7 || '';
  }
  
  textInputChanged_elField10 = (event) => {
    this.setState({field10: event.target.value});
  }
  
  getValue_elField10 = () => {
    return this.state.field10 || '';
  }
  
  textInputChanged_elField9 = (event) => {
    this.setState({field9: event.target.value});
  }
  
  getValue_elField9 = () => {
    return this.state.field9 || '';
  }
  
  textInputChanged_elField8 = (event) => {
    this.setState({field8: event.target.value});
  }
  
  getValue_elField8 = () => {
    return this.state.field8 || '';
  }
  
  textInputChanged_elField11 = (event) => {
    this.setState({field11: event.target.value});
  }
  
  getValue_elField11 = () => {
    return this.state.field11 || '';
  }
  
  textInputChanged_elField12 = (event) => {
    this.setState({field12: event.target.value});
  }
  
  getValue_elField12 = () => {
    return this.state.field12 || '';
  }
  
  
  getValue_elPicker = () => {
    return this.state.picker !== undefined ? this.state.picker : '';
  }
  
  pickerValueChanged_elPicker = (date) => {
    this.setState({picker: date.toString()});
  }
  
  
  getValue_elPicker2 = () => {
    return this.state.picker2 !== undefined ? this.state.picker2 : '';
  }
  
  pickerValueChanged_elPicker2 = (event) => {
    this.setState({picker2: event.target.value});
  }
  
  
  getValue_elPicker3 = () => {
    return this.state.picker3 !== undefined ? this.state.picker3 : '';
  }
  
  pickerValueChanged_elPicker3 = (event) => {
    this.setState({picker3: event.target.value});
  }
  
  textInputChanged_elField4 = (event) => {
    this.setState({field4: event.target.value});
  }
  
  getValue_elField4 = () => {
    return this.state.field4 || '';
  }
  
  textInputChanged_elField15 = (event) => {
    this.setState({field15: event.target.value});
  }
  
  getValue_elField15 = () => {
    return this.state.field15 || '';
  }
  
  textInputChanged_elField14 = (event) => {
    this.setState({field14: event.target.value});
  }
  
  getValue_elField14 = () => {
    return this.state.field14 || '';
  }
  
  textInputChanged_elField13 = (event) => {
    this.setState({field13: event.target.value});
  }
  
  getValue_elField13 = () => {
    return this.state.field13 || '';
  }
  
  onClick_elButton2 = async () => {
    // Go to screen 'Supporting Document Upload'
    this.props.appActions.goToScreen('supportingDocumentUpload', { ...this.props, transitionId: 'slideIn_bottom' });
  
  }
  
  
  render() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_elBackground_outer = {
      boxSizing: 'border-box',
      backgroundColor: '#f6f6f6',
     };
    
    const style_elField = {
      display: 'block',
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elField3 = {
      display: 'block',
      paddingTop: 0,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_elField2 = {
      display: 'block',
      paddingTop: 0,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_elField5 = {
      display: 'block',
      paddingTop: 0,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_elField6 = {
      display: 'block',
      paddingTop: 0,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_elField7 = {
      display: 'block',
      paddingTop: 0,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_elField10 = {
      display: 'block',
      paddingTop: 0,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_elField9 = {
      display: 'block',
      paddingTop: 0,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_elField8 = {
      display: 'block',
      paddingTop: 0,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_elField11 = {
      display: 'block',
      paddingTop: 0,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_elField12 = {
      display: 'block',
      paddingTop: 0,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    
    let selection_picker2 = this.getValue_elPicker2();
    // Source datasheet and selected data column for picker element 'picker 2'
    const dataSource_picker2 = this.props.appActions.getDataSheet('localizationSheet');
    const valueColumnName_picker2 = '(null)';
    
    const style_elPicker2 = {
      pointerEvents: 'auto',
     };
    
    let selection_picker3 = this.getValue_elPicker3();
    
    const style_elPicker3 = {
      pointerEvents: 'auto',
     };
    const style_elText3 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_elText2 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elField4 = {
      display: 'block',
      paddingTop: 0,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_elField15 = {
      display: 'block',
      paddingTop: 0,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_elField14 = {
      display: 'block',
      paddingTop: 0,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_elField13 = {
      display: 'block',
      paddingTop: 0,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_elButton = {
      display: 'block',
      color: '(null)',
      textAlign: 'center',
     };
    
    const style_elButton2 = {
      display: 'block',
      color: '(null)',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen StartScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elSpacer">
            <div />
          </div>
          
          <div className="elField">
            <Input className="baseFont" style={style_elField} type="text" label={this.props.locStrings.start_field_36127} floatingLabel={true} onChange={this.textInputChanged_elField} value={this.getValue_elField()}  />
          </div>
          
          <div className="elText">
            <div className="baseFont" style={style_elText}>
              <div>{this.props.locStrings.start_text_496034}</div>
            </div>
          </div>
          
          <div className="elField3">
            <Input className="baseFont" style={style_elField3} type="text" placeholder={this.props.locStrings.start_field3_183468} onChange={this.textInputChanged_elField3} value={this.getValue_elField3()}  />
          </div>
          
          <div className="elField2">
            <Input className="baseFont" style={style_elField2} type="text" placeholder={this.props.locStrings.start_field2_466773} onChange={this.textInputChanged_elField2} value={this.getValue_elField2()}  />
          </div>
          
          <div className="elField5">
            <Input className="baseFont" style={style_elField5} type="email" placeholder={this.props.locStrings.start_field5_63847} onChange={this.textInputChanged_elField5} value={this.getValue_elField5()}  />
          </div>
          
          <div className="elField6">
            <Input className="baseFont" style={style_elField6} type="tel" placeholder={this.props.locStrings.start_field6_578260} onChange={this.textInputChanged_elField6} value={this.getValue_elField6()}  />
          </div>
          
          <div className="elField7">
            <Input className="baseFont" style={style_elField7} type="text" placeholder={this.props.locStrings.start_field7_656794} onChange={this.textInputChanged_elField7} value={this.getValue_elField7()}  />
          </div>
          
          <div className="elField10">
            <Input className="baseFont" style={style_elField10} type="text" placeholder={this.props.locStrings.start_field10_791713} onChange={this.textInputChanged_elField10} value={this.getValue_elField10()}  />
          </div>
          
          <div className="elField9">
            <Input className="baseFont" style={style_elField9} type="text" placeholder={this.props.locStrings.start_field9_573875} onChange={this.textInputChanged_elField9} value={this.getValue_elField9()}  />
          </div>
          
          <div className="elField8">
            <Input className="baseFont" style={style_elField8} type="text" placeholder={this.props.locStrings.start_field8_35435} onChange={this.textInputChanged_elField8} value={this.getValue_elField8()}  />
          </div>
          
          <div className="elField11">
            <Input className="baseFont" style={style_elField11} type="text" placeholder={this.props.locStrings.start_field11_380811} onChange={this.textInputChanged_elField11} value={this.getValue_elField11()}  />
          </div>
          
          <div className="elField12">
            <Input className="baseFont" style={style_elField12} type="text" placeholder={this.props.locStrings.start_field12_354434} onChange={this.textInputChanged_elField12} value={this.getValue_elField12()}  />
          </div>
          
          <div className="elPicker">
            <DatePicker className="baseFont"  onChange={this.pickerValueChanged_elPicker} selected={Date.parse(this.getValue_elPicker())}  />
          </div>
          
          <div className="elPicker2">
            <Select className="baseFont" style={style_elPicker2}  onChange={this.pickerValueChanged_elPicker2} value={selection_picker2} >
              {dataSource_picker2.items.every(item => {
                return item[valueColumnName_picker2] !== selection_picker2;
              }) ? <Option value=''/> : null}
              {dataSource_picker2.items.map(item => {
                const colValue = item[valueColumnName_picker2];
                const labelColValue = item[valueColumnName_picker2];
                return <Option key={item.key} value={colValue} label={labelColValue} />
              })}
            </Select>
          </div>
          
          <div className="elPicker3">
            <Select className="baseFont" style={style_elPicker3}  onChange={this.pickerValueChanged_elPicker3} value={selection_picker3}  />
          </div>
          
          <div className="elText3">
            <div className="baseFont" style={style_elText3}>
              <div>{this.props.locStrings.start_text3_398402}</div>
            </div>
          </div>
          
          <div className="elText2">
            <div className="baseFont" style={style_elText2}>
              <div>{this.props.locStrings.start_text2_601827}</div>
            </div>
          </div>
          
          <div className="elField4">
            <Input className="baseFont" style={style_elField4} type="text" placeholder={this.props.locStrings.start_field4_92655} onChange={this.textInputChanged_elField4} value={this.getValue_elField4()}  />
          </div>
          
          <div className="elField15">
            <Input className="baseFont" style={style_elField15} type="text" placeholder={this.props.locStrings.start_field15_466082} onChange={this.textInputChanged_elField15} value={this.getValue_elField15()}  />
          </div>
          
          <div className="elField14">
            <Input className="baseFont" style={style_elField14} type="text" placeholder={this.props.locStrings.start_field14_510001} onChange={this.textInputChanged_elField14} value={this.getValue_elField14()}  />
          </div>
          
          <div className="elField13">
            <Input className="baseFont" style={style_elField13} type="text" placeholder={this.props.locStrings.start_field13_337271} onChange={this.textInputChanged_elField13} value={this.getValue_elField13()}  />
          </div>
          
          <div className="elButton">
            <Button className="actionFont" style={style_elButton}  color="accent" >
              {this.props.locStrings.start_button_473638}
            </Button>
          </div>
          
          <div className="elButton2">
            <Button className="actionFont" style={style_elButton2}  color="accent" onClick={this.onClick_elButton2} >
              {this.props.locStrings.start_button2_848272}
            </Button>
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Start</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_start} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  
}
