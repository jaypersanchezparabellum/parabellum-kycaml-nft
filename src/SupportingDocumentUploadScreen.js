import React, { Component } from 'react';
import './App.css';
import Camera from './Camera';
import btn_icon_back_supportingdocumentupload from './images/btn_icon_back_supportingdocumentupload.png';

// UI framework component imports
import Select from 'muicss/lib/react/select';
import Option from 'muicss/lib/react/option';
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';
import Container from 'muicss/lib/react/container';

export default class SupportingDocumentUploadScreen extends Component {

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

  
  getValue_elPicker = () => {
    return this.state.picker !== undefined ? this.state.picker : '';
  }
  
  pickerValueChanged_elPicker = (event) => {
    this.setState({picker: event.target.value});
  }
  
  onClick_elButton2 = async () => {
      //alert(`Save Picture`)
      await this._elCamera.savePicture()
  }

  onClick_elButton3 = async () => {
    //console.log('Save image');
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
    const style_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    let selection_picker = this.getValue_elPicker();
    const items_picker = [
      {"label": "Passport", "value": "passport"},
      {"label": "Citizenship Card", "value": "citizenshipcard"},
      {"label": "Driver License", "value": "driverlicense"},
      {"label": "Social Security/Insurance", "value": "socialcard"},
    ];
    
    const style_elPicker = {
      pointerEvents: 'auto',
     };
    const style_elXanoFileUpload = {
      pointerEvents: 'auto',
     };
    
    const style_elButton2 = {
      display: 'block',
      color: '(null)',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elCamera = {
      pointerEvents: 'auto',
     };

     const style_elButton3 = {
      display: 'block',
      color: '(null)',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <Container fluid={true} className="AppScreen SupportingDocumentUploadScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elSpacer">
            <div />
          </div>
          
          <div className="elText">
            <div className="baseFont" style={style_elText}>
              <div>{this.props.locStrings.supportingdocumentupload_text_1028146}</div>
            </div>
          </div>
          
          <div className="elPicker">
            <Select className="baseFont" style={style_elPicker}  onChange={this.pickerValueChanged_elPicker} value={selection_picker} >
              {items_picker.every(item => {
                return item.value !== selection_picker;
              }) ? <Option value=''/> : null}
              {items_picker.map(item => {
                return <Option value={item.value} label={item.label} />
              })}
            </Select>
          </div>
          
          <div className="elXanoFileUpload">
            <div style={style_elXanoFileUpload}>
              
              <input type="file" ref={(el)=> this._xanoFileUpload_inputEl = el} onChange={(event) => {
                const url = "/upload/image";
                  
                const formData = new FormData()
                formData.append('content', event.target.files[0])
              
                const fetchOpts = {
                  method: 'POST',
                  body: formData,
                };
                
                const fetchComplete = (json) => {
                  //let url = "" + json.path;
                  //null(url);
                  null(json);
                  this.props.appActions.setState({loading: false});
                };
              
                this.props.appActions.setState({loading: true});
              
                fetch(url, fetchOpts)
                  .then((response) => {
                    if (response.status >= 400) {
                      throw new Error("Server error: "+response.status);
                    }
                    return response.json();
                  })
                  .then((json) => {
                    fetchComplete(json);
                  })
                  .catch((exc) => {
                    fetchComplete(null);
                  });
              }}/>
            </div>
          </div>
          
          <div className="elButton2">
            <Button className="actionFont" style={style_elButton2}  color="accent" onClick={this.onClick_elButton2} >
              {this.props.locStrings.supportingdocumentupload_button2_1001487}
            </Button>
          </div>
          
          <div className="elCamera">
            <div style={style_elCamera}>
              <Camera ref={(el)=> this._elCamera = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>

          <div className="elButton3">
            <Button className="actionFont" style={style_elButton3}  color="accent" onClick={this.onClick_elButton3} ></Button>
          </div>

        </div>
        <Appbar className="navBar">
          <div className="title">Supporting Document Upload</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_supportingdocumentupload} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </Container>
    )
  }
  
}
