import React from 'react';

const DBNavBar = (props) => (
  <div className="display">
    <ul className="nav nav-tabs col-md-8 " data-toggle="button">
      <li><h3 className="database-display-name">Databases:</h3></li>
      {props.names.map((el, i) =>
        <button
          className="tabs btn btn-primary info"
          aria-pressed="true"
          role="button"
          onClick={props.click}
          id={i}
          key={i}
          role="presentation"
        >{el}
        </button>
      )}
    </ul>
  </div>
);

DBNavBar.propTypes = {
  names: React.PropTypes.array,
  click: React.PropTypes.func,
};

export default DBNavBar;
