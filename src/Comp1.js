import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Select from 'muicss/lib/react/select';
import Option from 'muicss/lib/react/option';

export default class Comp1 extends Component {

  // This component doesn't use any properties

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

  
  getValue_elPicker4 = () => {
    return this.state.picker4 !== undefined ? this.state.picker4 : '';
  }
  
  pickerValueChanged_elPicker4 = (event) => {
    this.setState({picker4: event.target.value});
    
    // Write your script here
    console.log(`Pop up a screen component where user can select the file they want to upload base on the document type`)  
  }
  
  render() {
    let selection_picker4 = this.getValue_elPicker4();
    // Source datasheet and selected data column for picker element 'picker 4'
    const dataSource_picker4 = this.props.appActions.getDataSheet('localizationSheet');
    const valueColumnName_picker4 = 'key';
    
    const style_elPicker4 = {
      pointerEvents: 'auto',
     };
    
    return (
      <div className="Comp1">
        <div className="layoutFlow">
          <div className="elPicker4">
            <Select className="baseFont" style={style_elPicker4}  onChange={this.pickerValueChanged_elPicker4} value={selection_picker4} >
              {dataSource_picker4.items.every(item => {
                return item[valueColumnName_picker4] !== selection_picker4;
              }) ? <Option value=''/> : null}
              {dataSource_picker4.items.map(item => {
                const colValue = item[valueColumnName_picker4];
                const labelColValue = item[valueColumnName_picker4];
                return <Option key={item.key} value={colValue} label={labelColValue} />
              })}
            </Select>
          </div>
        </div>
        
      </div>
    )
  }
  
}
