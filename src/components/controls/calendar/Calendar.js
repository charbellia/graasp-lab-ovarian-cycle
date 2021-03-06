import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  rootCalendar: {
    [theme.breakpoints.down('sm')]: {
      width: '5rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '3rem',
    },
  },
});

// create an svg and pass the ovarian cycle dayCount to display
export const Calendar = ({
  classes,
  dayCount,
  themeColor,
}) => (
  <svg
    aria-hidden="true"
    data-prefix="far"
    data-con="calendar"
    className={`${classes.rootCalendar} rootCalendar svg-inline--fa fa-calendar fa-w-14`}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <g fill={themeColor} stroke="none" strokeWidth="1" fillRule="evenodd">
      <path
        d="M400,64 L352,64 L352,12 C352,5.4 346.6,0 340,0 L300,0 C293.4,0 288,5.4 288,12 L288,64 L160,64 L160,12 C160,5.4 154.6,0 148,0 L108,0 C101.4,0 96,5.4 96,12 L96,64 L48,64 C21.5,64 0,85.5 0,112 L0,464 C0,490.5 21.5,512 48,512 L400,512 C426.5,512 448,490.5 448,464 L448,112 C448,85.5 426.5,64 400,64 Z M394,464 L54,464 C50.7,464 48,461.3 48,458 L48,160 L400,160 L400,458 C400,461.3 397.3,464 394,464 Z"
        fillRule="nonzero"
      />
      <text fill={themeColor} fontFamily="Helvetica" fontSize="160" fontWeight="normal">
        <tspan x="141" y="356">{dayCount.toString().padStart(2, '0')}</tspan>
      </text>
    </g>
  </svg>


);

Calendar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  dayCount: PropTypes.number.isRequired,
  themeColor: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  themeColor: state.layout.themeColor,
});

const StyledComponent = withStyles(styles)(Calendar);

export default connect(mapStateToProps)(StyledComponent);
