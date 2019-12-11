import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

class AppS extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  handleChange2 = () => {
    this.setState({selectedOption: {value: "aaa", label: "aaa"}});
  };
  render() {
    const { selectedOption } = this.state;
    console.log(this.state.selectedOption)
    return (
      <>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
        <button onClick={this.handleChange2}>change state</button>
      </>
    );
  }
}

export default AppS;