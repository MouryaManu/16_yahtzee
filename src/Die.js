import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps= {
    names: ["one", "two","three","four","five", "six"],
    val: 4
  };
  constructor(props) {
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }
  
  handleClick() {
       this.props.handleClick(this.props.idx);
  }

  render() {
    const {disabled,rolling} = this.props;
    let classes=` Die fas fa-dice-${this.props.names[this.props.val-1]} fa-5x `;
    if (this.props.locked)  classes +="Die-locked ";
    if(rolling) classes+="Die-rolling"
    return (
      <i
        className={classes}
        onClick={this.handleClick}
        disabled={disabled}
      >
      </i>
    );
  }
}

export default Die;
