import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'components/Button/Button';
import placeActions from 'actions/placeActions';
import Place from 'components/Place/Place';
import Condition from 'containers/Condition/Condition';

class HomePage extends Component {
  componentDidMount() {
    this.props.removeDetails();
  }

  handleOnClick = () => {
    this.props.fetchPlaces(this.props.condition);
  }

  render() {
    const { condition, place } = this.props;
    const { latitude, longitude } = condition;
    const disabled = !(latitude && longitude);
    return (
      <div className="homePageWrapper">
        <Place place={place} />
        <div className="searchWrapper">
          <Condition />
          <Button onClick={this.handleOnClick} theme="homepageClick" disabled={disabled}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  condition: state.condition,
  place: state.place,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchPlaces: placeActions.fetchPlaces,
    removeDetails: placeActions.removeDetails,
  }, dispatch);

HomePage.propTypes = {
  condition: PropTypes.object,
  place: PropTypes.object,
  fetchPlaces: PropTypes.func,
  removeDetails: PropTypes.func,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
