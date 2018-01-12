import React, { Component } from 'react';
import { Option } from 'components';
import { optionsPerCurrency } from 'lib/variables';

class InitialMoneyOptions extends Component {
  render() {
    const { currency, onSelect, optionIndex } = this.props;
    const info = optionsPerCurrency[currency];
    const options = (() => {
      const multipliers = [1, 10, 100];
      return multipliers.map(
        multiplier =>
          // ₩ 1,000,000
          `${info.symbol} ${(info.initialValue * multiplier).toLocaleString()}`
      )
    })();
    const optionList = options.map(
      (option, idx) => (
        <Option 
          key={option} 
          active={idx === optionIndex}
          onClick={() => onSelect(idx)} >
          {option}
        </Option>
      )
    )

    return (
      <div>
        {optionList}
      </div>
    );
  }
}

export default InitialMoneyOptions;