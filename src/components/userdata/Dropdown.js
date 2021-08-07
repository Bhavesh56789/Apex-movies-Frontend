import React from "react";
import Select from "react-select";
import data from "../../assets/Language";

class Language extends React.Component {
  state = {
    selectedOption: null,
    choice: []
  };
  handleChange = async (selected) => {
    let choice = [];
    // choice.push(selected);
    selected.map((e) => choice.push(e.label));
    await this.setState({ selectedOption: selected, choice: choice });
    // console.log(`Option selected:`, this.state.choice);
    this.props.setLanguage(this.state.choice);
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={data}
        isMulti
        isSearchable
        isClearable
        className="col-8 offset-2"

      />
    );
  }
}

export default Language;
