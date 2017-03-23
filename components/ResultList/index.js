import React, { PropTypes, Component } from 'react';
import styles from './styles.scss';

const { string, func } = PropTypes;

class ResultList extends Component {
  static propTypes = {
    data: PropTypes.array,
  };

  static defaultProps = {
    onChange: null,
    onSelect: null,
  };

  state = {
    showList: true,
  };

  renderItem(item, index) {
    return (
      <div
        className={styles.listRow}
        key={index}
      >
        <div className={styles.listItem}>{item.no}</div>
        <div className={styles.listItem}>{item.arrival}</div>
        <div className={styles.listItem}>{item.depart}</div>
      </div>
    );
  }

  renderList() {
    const {
      data,
    } = this.props;

    if (this.state.showList && data && data.length > 0) {
      return (
        <div className={styles.busList}>
          <div className={styles.listRow}>
            <div className={styles.listItem}>No</ div>
            <div className={styles.listItem}>Arrival</ div>
            <div className={styles.listItem}>Departure</ div>
          </div>
          { data.map((item, index) => this.renderItem(item, index)) }
        </div>
      );
    }

    return null;
  }

  render() {
    const {
      className,
    } = this.props;

    return (
      <div className={`${styles.autocomplete} ${className}`} >
        {this.renderList()}
      </div>
    );
  }
}

export default ResultList;
