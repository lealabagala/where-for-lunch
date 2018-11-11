import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import conditionActions from 'actions/conditionActions';
import { priceRange } from 'constants/priceRange';
import Input from 'components/Input/Input';
import Checkbox from 'components/Checkbox/Checkbox';
import { isPriceChecked } from 'lib/utils';
import styles from './Condition.css';

class Condition extends Component {
  static propTypes = {
    condition: PropTypes.object,
    action: PropTypes.func,
    price: PropTypes.string,
  };

  handleOnBlurAction = (e) => {
    this.props.setRadius(e.target.value);
  }

  handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      this.props.addPrice(value);
    } else {
      this.props.removePrice(value);
    }
  }

  render() {
    const { condition: { radius, price } } = this.props;

    return (
      <div className={styles.root}>
        <span>Price Ranges:</span>
        { Object.keys(priceRange).map(key => (
          <Checkbox
            label={priceRange[key]}
            key={key}
            value={key}
            checked={isPriceChecked(price, key)}
            onChange={this.handleCheckboxChange} />
        )) }
        <span>Radius:</span>
        <Input defaultValue={radius} onBlurAction={this.handleOnBlurAction}></Input>
        <span>meters</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  condition: state.condition,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    setRadius: conditionActions.setRadius,
    addPrice: conditionActions.addPrice,
    removePrice: conditionActions.removePrice,
  }, dispatch);

Condition.propTypes = {
  condition: PropTypes.object,
  setRadius: PropTypes.func,
  addPrice: PropTypes.func,
  removePrice: PropTypes.func,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Condition);
