import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import placeActions from 'actions/placeActions';
import { getDayOfTheWeek, getOperatingHours } from 'lib/utils';
import styles from './PlaceDetailsPage.css';

class PlaceDetailsPage extends Component {
  componentDidMount() {
    const { match: { params } } = this.props;
    this.props.fetchPlaceDetails(params.id);
  }

  handleOnClick = () => {
    this.props.fetchPlaces(this.props.condition);
  }

  getDayIndex = () => {
    const date = new Date();
    return date.getDay();
  }

  render() {
    const { loading, error, ...place } = this.props.place;
    const dayIndex = this.getDayIndex();

    let contentBlock;
    if (loading) {
      contentBlock = <div className={styles.box}><h3>Loading...</h3></div>;
    } else if (error) {
      contentBlock = <div className={styles.box}><h3>Error loading place details</h3></div>;
    } else {
      contentBlock = <div className={styles.box}>
        <div className={styles.row}>
          <div className={styles.col}>
            <p><b>Address:</b> { place.location && place.location.display_address.join(' ') }</p>
            <p>
              <b>Hours:</b> { getDayOfTheWeek(dayIndex) } { place.hours && place.hours.length && getOperatingHours(place.hours[0].open, dayIndex) } <b>{ place.is_closed ? 'CLOSED' : 'OPEN' }</b>
            </p>
            <p><b>Phone:</b> { place.display_phone }</p>
            <div className={styles.rating}>
              <b>Rating:</b>
              <div className={styles.stars}>
                <div className={styles.emptyStars}></div>
                <div className={styles.fullStars} style={{ width: `${place.rating / 5 * 100}%` }}></div>
              </div>&nbsp;
              <div className={styles.ratingScore}>Based on { place.review_count } review/s</div>
            </div>
            <p><b>Categories:</b> { place.categories && place.categories.map(obj => obj.title).join(', ') }</p>
          </div>
          <div className={styles.colImage}>
            <img className={styles.placeImage} src={place.image_url} />
          </div>
        </div>
        <h4>Photos:</h4>
        <div className={`${styles.row} ${styles.photos}`}>
          { place.photos && place.photos.map((photo, i) => <img className={styles.photo} src={photo} key={i} />) }
        </div>
      </div>;
    }

    return (
      <div className={styles.root}>
        <div className={styles.name}>
          <span>{ place.name || 'Where for lunch?' }</span>
          <Link className={styles.back} to='/'>{`Back`}</Link>
        </div>
        { contentBlock }
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
    fetchPlaceDetails: placeActions.fetchPlaceDetails,
  }, dispatch);

PlaceDetailsPage.propTypes = {
  condition: PropTypes.object,
  place: PropTypes.object,
  fetchPlaces: PropTypes.func,
  fetchPlaceDetails: PropTypes.func,
  match: PropTypes.object,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaceDetailsPage);
