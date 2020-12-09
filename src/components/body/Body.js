import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Popover from '@material-ui/core/Popover';
import { withStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next';
import { AppState } from '../../config/AppState';
import { appendSvg } from '../../actions';

import eggCell from '../../resources/egg_cell.png';

// our body component just render the human image
// then dispatches the received svg to it component
const styles = theme => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing.unit,
  },
});

export class Body extends React.Component {
  state = AppState;

  static propTypes = {
    t: PropTypes.func.isRequired,
    classes: PropTypes.shape({}).isRequired,
    dispatchAppendSvg: PropTypes.func.isRequired,
    simulation: PropTypes.shape({}).isRequired,
  };

  componentDidMount() {
    const { dispatchAppendSvg } = this.props;
    dispatchAppendSvg();
  }

  handlePopoverOpen = (event) => {
    const val = event.currentTarget;
    this.setState({ anchorEl: val });
  };

  handlePituitaryPopoverOpen = (event) => {
    const val = event.currentTarget;
    this.setState({ anchorElPituitary: val });
  };

  handleHeartPopoverOpen = (event) => {
    const val = event.currentTarget;
    this.setState({ anchorElHeart: val });
  };

  handleOvaryPopoverOpen = (event) => {
    const val = event.currentTarget;
    this.setState({ anchorElOvary: val });
  };

  handlePopoverClose = () => {
    this.setState({ anchorEl: null });
  };

  handlePituitaryPopoverClose = () => {
    this.setState({ anchorElPituitary: null });
  };

  handleHeartPopoverClose = () => {
    this.setState({ anchorElHeart: null });
  };

  handleOvaryPopoverClose = () => {
    this.setState({ anchorElOvary: null });
  };

  render() {
    const { classes, t, simulation } = this.props;
    const { appearOvule } = simulation;
    const {
      anchorEl, anchorElHeart, anchorElOvary, anchorElPituitary,
    } = this.state;
    const open = Boolean(anchorEl);
    const openPituitary = Boolean(anchorElPituitary);
    const openHeart = Boolean(anchorElHeart);
    const openOvary = Boolean(anchorElOvary);

    return (
      <div className="body-container">
        <Popover
          id="mouse-over-popover"
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'right',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={this.handlePopoverClose}
          disableRestoreFocus
        >
          <h6>
            <b>
              {t('The Brain')}
              :
            </b>
            <br />
            {t('The brain secretes the pituitary')}
            <br />
            {t('hormones LH and FSH that cause')}
            <br />
            {t('ovarian and uterine cycles.')}
          </h6>
        </Popover>
        <Popover
          id="pituitary-over-popover"
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={openPituitary}
          anchorEl={anchorElPituitary}
          anchorOrigin={{
            vertical: 'right',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={this.handlePituitaryPopoverClose}
          disableRestoreFocus
        >
          <h6>
            <b>
              {t('The Pituitary')}
              {/* : */}
            </b>
            <br />
            {/* {t('The brain secretes the pituitary')}
            <br />
            {t('hormones LH and FSH that cause')}
            <br />
            {t('ovarian and uterine cycles.')} */}
          </h6>
        </Popover>
        <Popover
          id="heart-over-popover"
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={openHeart}
          anchorEl={anchorElHeart}
          anchorOrigin={{
            vertical: 'right',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={this.handleHeartPopoverClose}
          disableRestoreFocus
        >
          <h6>
            <b>
              {t('The Heart')}
              :
            </b>
            <br />
            {t('Pumps the blood that it circulates')}
            <br />
            {t('in all the tissues of the body')}
          </h6>
        </Popover>
        <Popover
          id="ovary-over-popover"
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={openOvary}
          anchorEl={anchorElOvary}
          anchorOrigin={{
            vertical: 'right',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={this.handleOvaryPopoverClose}
          disableRestoreFocus
        >
          <h6>
            <b>
              {t('The Ovaries')}
              :
            </b>
            <br />
            {t('Exert feedback on the influence')}
            <br />
            {t('of the hypothalamic pituitary complex by')}
            <br />
            {t('releasing Estrogens and Progesterones.')}
          </h6>
        </Popover>
        <svg viewBox="0 0 3676 4660" version="1.1" width="40%" className="body-svg">
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Female-Body-Silhouette">
              <path d="M1688.20457,4660 L1051.23089,4660 C989.769807,4231.85764 964.763062,4263.14702 990.855007,3809.5947 C1094.89158,2504.52278 1395.77833,3302.43514 1147.79218,2109.26185 C1103.68211,2213.8469 1017.47091,2453.65604 1015.51082,2458.78477 C940.701786,2652.64562 961.45372,2726.20186 908.189338,2835.49509 C862.064881,2941.00844 833.293428,2993.4138 833.293428,2993.4138 C472.49104,3918.90331 592.143148,3617.43146 569.469136,3850.86046 C554.108796,3974.69876 530.386871,4049.2192 530.386871,4049.2192 C525.945458,4125.39109 547.745304,4234.18171 526.977082,4282.00198 C524.072245,4290.01818 498.04274,4315.16435 483.643439,4265.39003 C474.358822,4237.35126 471.084773,4086.25376 451.163569,4064.23612 C421.941458,4081.73022 410.251528,4327.33482 353.028968,4377.20146 C343.022214,4383.05847 319.349156,4377.45277 318.920217,4366.3542 C316.080536,4275.90392 319.533762,4342.70049 333.650723,4230.82752 C351.030875,4084.77668 356.357313,4081.82766 352.849791,4069.16483 C330.050898,4054.11714 311.802011,4128.56065 305.063876,4145.4393 C302.854029,4151.83995 252.499913,4281.98147 250.067452,4289.86432 C221.442598,4386.83834 132.64148,4411.19981 187.621616,4254.94793 C187.621616,4254.94793 195.597699,4219.78023 215.540622,4152.67593 C248.503727,4049.1474 257.641745,4038.26424 239.838085,4037.1154 C204.583688,4062.13334 152.779869,4185.95113 109.207324,4238.35649 C102.089118,4247.42409 91.3547977,4252.93234 82.922628,4260.7793 C78.3291859,4265.22078 71.368438,4262.37433 66.2374654,4260.32284 C17.523089,4235.7152 135.291126,4056.77382 161.771288,3981.23276 C167.010852,3965.52346 188.615233,3871.72926 178.711641,3861.23075 C135.50831,3894.07 139.455629,3908.17914 117.183408,3932.31494 C98.7824913,3951.75795 57.7944365,3981.08403 29.6202391,3976.41688 C20.7917086,3982.60726 7.64121599,3978.06321 2.77629388,3969.33411 C-15.7223553,3936.34612 62.491041,3900.66042 110.939367,3795.75739 C114.381734,3788.39766 184.597328,3716.64673 292.760402,3676.29902 C317.562817,3666.34928 317.437936,3690.17223 384.759554,3497.17813 C531.125296,3124.59132 415.496523,2918.98568 662.402179,2467.37539 C699.801268,2393.92173 716.160655,2339.56232 750.144525,2210.32346 C888.04009,1674.48405 782.895875,1743.71165 836.312286,1516.65766 C933.827912,1193.29639 1111.8808,1211.5085 1226.05987,1213.26766 C1318.0536,1215.20632 1471.6027,1153.26665 1513.47578,1111.99576 C1570.78522,1053.08718 1610.73079,1006.61063 1576.88809,810.144384 C1576.88809,810.144384 1538.67999,747.876478 1527.59817,635.126487 C1477.18976,693.014457 1394.18203,461.570277 1440.37164,416.175891 C1449.84629,406.600553 1468.43724,409.836782 1474.5184,421.381552 C1481.53344,428.992587 1481.65832,440.332208 1490.19908,446.840566 C1501.05828,398.840785 1472.34113,300.68203 1533.28296,154.667098 C1563.36838,91.6401404 1594.28453,75.1923046 1650.27457,39.5784063 C1695.88864,8.55984969 1806.87511,0.62570501 1812.30471,0 L1863.67416,0 C1869.10376,0.62570501 1980.09023,8.55984969 2025.7043,39.5784063 C2081.69434,75.1923046 2112.61049,91.6401404 2142.6959,154.667098 C2203.63774,300.68203 2174.92058,398.840785 2185.77978,446.840566 C2194.32055,440.332208 2194.44543,428.992587 2201.46047,421.381552 C2207.54162,409.836782 2226.13258,406.600553 2235.60723,416.175891 C2281.79684,461.570277 2198.78911,693.014457 2148.38069,635.126487 C2137.29888,747.876478 2099.09078,810.144384 2099.09078,810.144384 C2065.24808,1006.61063 2105.19365,1053.08718 2162.50309,1111.99576 C2204.37617,1153.26665 2357.92527,1215.20632 2449.92442,1213.26766 C2564.09806,1211.5085 2742.15095,1193.29639 2839.67201,1516.65766 C2893.08842,1743.71165 2787.94421,1674.48405 2925.83977,2210.32346 C2959.82364,2339.56232 2976.18303,2393.92173 3013.58212,2467.37539 C3260.48777,2918.98568 3144.859,3124.59132 3291.22474,3497.17813 C3358.54636,3690.17223 3358.42148,3666.34928 3383.2239,3676.29902 C3491.38697,3716.64673 3516.5966,3690.85435 3565.04493,3795.75739 C3613.49326,3900.66042 3691.70665,3936.34612 3673.22972,3969.33411 C3668.3648,3978.06321 3655.21431,3982.60726 3646.38578,3976.41688 C3618.21158,3981.08403 3577.22352,3951.75795 3558.82261,3932.31494 C3536.55039,3908.17914 3540.49771,3894.07 3497.29437,3861.23075 C3487.39078,3871.72926 3508.99516,3965.52346 3514.23473,3981.23276 C3540.71489,4056.77382 3658.48293,4235.7152 3609.76855,4260.32284 C3604.63758,4262.37433 3597.67683,4265.22078 3593.08339,4260.7793 C3584.65122,4252.93234 3573.9169,4247.42409 3566.79869,4238.35649 C3523.22615,4185.95113 3471.42233,4062.13334 3436.16793,4037.1154 C3418.36427,4038.26424 3427.50229,4049.1474 3460.46539,4152.67593 C3480.40832,4219.78023 3488.3844,4254.94793 3488.3844,4254.94793 C3543.36453,4411.19981 3454.56342,4386.83834 3425.93856,4289.86432 C3423.5061,4281.98147 3373.15199,4151.83995 3370.94214,4145.4393 C3364.204,4128.56065 3345.95512,4054.11714 3323.15622,4069.16483 C3319.6487,4081.82766 3324.97514,4084.77668 3342.35529,4230.82752 C3356.47225,4342.70049 3359.92548,4275.90392 3357.0858,4366.3542 C3356.65686,4377.45277 3332.9838,4383.05847 3322.97705,4377.20146 C3265.75449,4327.33995 3254.06456,4081.73022 3224.84245,4064.23612 C3204.92124,4086.25376 3201.64719,4237.35126 3192.36258,4265.39003 C3177.96327,4315.16435 3151.93377,4290.01818 3149.02893,4282.00198 C3128.26071,4234.18171 3150.06056,4125.39109 3145.61914,4049.2192 C3145.61914,4049.2192 3121.89722,3974.69876 3106.53688,3850.86046 C3083.86287,3617.43146 3203.51498,3918.89818 2842.71259,2993.4138 C2842.71259,2993.4138 2813.94113,2941.00844 2767.81668,2835.49509 C2714.5523,2726.20699 2735.30423,2652.65075 2660.49519,2458.78477 C2658.53511,2453.65604 2572.32391,2213.8469 2528.21383,2109.26185 C2280.23312,3302.43514 2581.11443,2504.52278 2685.15101,3809.5947 C2711.24295,4263.14702 2686.23621,4231.85764 2624.77512,4660 L1987.80152,4660 C1986.3796,4647.53564 1984.84168,4634.92607 1983.17967,4622.15471 L1916.8571,4159.40483 C1900.85063,4140.74138 1889.79597,4118.9648 1877.93772,4097.89597 C1860.71503,4066.08246 1863.52213,4095.26494 1863.67416,3914.92855 C1855.94241,3913.81048 1848.00976,3913.48737 1840.48976,3911.4564 C1839.61017,3909.7434 1838.82288,3908.06631 1838.12246,3906.4046 C1838.08445,3906.4405 1838.04644,3906.48153 1838.00301,3906.52256 C1837.95957,3906.48153 1837.92156,3906.4405 1837.88356,3906.4046 C1837.18314,3908.06631 1836.39585,3909.7434 1835.51625,3911.4564 C1827.99625,3913.48737 1820.06361,3913.81048 1812.33186,3914.92855 C1812.48388,4095.26494 1815.29099,4066.08246 1798.0683,4097.89597 C1786.21005,4118.9648 1775.15538,4140.74138 1759.14892,4159.40483 C1759.88734,4269.11861 1716.24964,4444.00829 1692.82635,4622.15471 C1691.16436,4634.92607 1689.62646,4647.53564 1688.20457,4660 Z" id="Combined-Shape" fill="#808080" />
              <path
                d="M1679.57589,3905.52513 C1670.25972,3900.63326 1647.63006,3872.60351 1638.61234,3854.7872 C1634.48493,3846.63199 1633.52554,3839.49985 1635.05369,3828.32818 C1636.20214,3819.91633 1637.6631,3807.82511 1638.29983,3801.45861 C1642.0538,3763.80175 1654.62119,3762.79509 1677.99032,3798.27887 C1688.00845,3813.49044 1689.78621,3819.00694 1689.78621,3834.87829 C1689.78621,3847.45427 1688.16509,3854.91221 1684.82519,3857.68295 C1677.80906,3863.5057 1678.17235,3893.32689 1685.35645,3901.2653 C1692.61321,3909.28379 1690.16708,3911.08616 1679.57589,3905.52474 L1679.57589,3905.52513 Z M2003.98583,3856.03058 C1996.77165,3841.09597 1995.4603,3817.83817 2001.22016,3807.02979 C2006.47532,3797.17182 2034.37382,3765.07833 2037.68794,3765.07833 C2039.16062,3765.07833 2040.36376,3767.36352 2040.36376,3770.15576 C2040.36376,3772.94877 2042.75052,3778.87621 2045.66814,3783.32862 C2051.82918,3792.7319 2054.21047,3815.75376 2051.51863,3839.89399 C2049.90141,3854.38485 2047.05098,3859.78807 2031.76753,3877.31257 C2021.94315,3888.5772 2013.90513,3899.77231 2013.90513,3902.19031 C2013.90513,3904.60832 2011.54962,3907.49001 2008.6734,3908.59393 C1998.31347,3912.56939 1996.34703,3910.46115 2003.40652,3902.94697 C2012.51839,3893.24915 2012.75277,3874.18361 2003.98583,3856.03058 Z"
                id="path1026"
                fill="#FA0C1A"
                fillRule="nonzero"
              />
              <g
                id="brain-solid"
                transform="translate(1555.000000, 121.000000)"
                fill="#392410"
                fillRule="nonzero"
              >
                <path
                  aria-owns={open ? 'mouse-over-popover' : undefined}
                  aria-haspopup="true"
                  onMouseEnter={this.handlePopoverOpen}
                  onMouseLeave={this.handlePopoverClose}
                  d="M208,0 C178.13,0 153.26,20.55 146.2,48.22 C145.45,48.2 144.75,48 144,48 C108.66,48 80,76.65 80,112 C80,116.84 80.64,121.51 81.66,126.04 C52.54,138 32,166.57 32,200 C32,212.58 35.16,224.32 40.34,234.91 C16.34,248.72 0,274.33 0,304 C0,337.34 20.42,365.88 49.42,377.89 C48.52,382.46 48,387.17 48,392 C48,431.76 80.23,464 120,464 C124.12,464 128.1,463.45 132.03,462.79 C141.61,491.31 168.25,512 200,512 C239.77,512 272,479.76 272,440 L272,205.45 C261.09,214.43 248.02,220.9 233.64,223.84 C228.67,224.86 224,221.02 224,215.95 L224,199.77 C224,196.2 226.35,192.99 229.8,192.11 C254,185.95 272,164.16 272,138.07 L272,64 C272,28.65 243.34,0 208,0 Z M576,304 C576,274.33 559.66,248.72 535.66,234.91 C540.83,224.32 544,212.58 544,200 C544,166.57 523.46,138 494.34,126.04 C495.36,121.51 496,116.84 496,112 C496,76.65 467.34,48 432,48 C431.25,48 430.55,48.2 429.8,48.22 C422.74,20.55 397.87,0 368,0 C332.66,0 304,28.65 304,64 L304,138.07 C304,164.16 321.99,185.95 346.2,192.11 C349.66,192.99 352,196.2 352,199.77 L352,215.95 C352,221.02 347.32,224.86 342.36,223.84 C327.98,220.9 314.92,214.43 304,205.45 L304,440 C304,479.76 336.23,512 376,512 C407.75,512 434.39,491.31 443.97,462.79 C447.9,463.46 451.88,464 456,464 C495.77,464 528,431.76 528,392 C528,387.17 527.48,382.46 526.58,377.89 C555.58,365.88 576,337.34 576,304 Z"
                  id="Brain-Shape"
                />
              </g>
              <g className="Brain-holder" transform="translate(1226.000000, 775.000000)" fill="#2D2020" fillRule="nonzero">
                <path
                  d="M992.679213,481.723295 C917.650252,405.84065 842.885573,346.132001 735.035085,443.848632 C724.833012,359.76688 740.060335,37.329268 742.648746,0.969591376 C737.569085,0.969591376 726.305997,1.97554243 714.145125,1.09685024 C714.059622,31.3965807 702.761555,375.425781 700.783324,412.415692 C695.680344,507.859843 690.581251,501.799897 673.577796,529.069654 C682.32243,428.698767 704.914678,163.957902 703.041383,-2.27373675e-13 C693.010316,0.339356981 682.31077,1.50286663 675.035235,0.71507364 C677.868496,134.791381 640.946707,448.393592 636.737623,573.634498 C632.338101,581.936624 621.996113,597.577345 615.684431,604.643242 C555.770084,468.088416 536.127692,154.486206 527.270349,9.04749952 C506.543623,9.04749952 488.405309,9.04749952 470.59346,9.04749952 C471.565086,136.306368 485.816897,326.182659 499.555689,453.144589 C430.430327,385.521651 335.125474,413.548902 298.289188,440.164185 C240.438575,481.965693 163.75785,570.737843 106.513531,700.281311 C62.8952956,798.991773 34.0380028,914.973081 0,1033.80256 C12.6311383,1077.73717 33.0352847,1108.45504 40.8082929,1113 C47.609675,1066.03542 195.910898,471.894063 358.530002,471.875883 C471.887666,471.863763 511.114152,578.99149 516.905043,630.270754 C520.239664,659.788751 518.327504,698.626946 514.573141,736.222851 C525.323211,740.276955 515.288257,810.501127 527.270349,841.806808 C540.298876,831.298613 542.893009,830.449502 549.518941,825.242009 C552.445741,822.94176 575.769912,819.620261 565.056635,814.530551 C567.504922,809.127038 591.236367,799.873331 601,801.041063 C610.763633,802.208794 639.468397,799.252108 645.707723,804.777968 C650.803342,809.290904 655.089977,807.462067 658.402037,809.102116 C668.65922,814.181216 671.424087,813.716585 675.035235,821.682977 C693.496129,815.186714 632.987195,726.762241 645.707723,725.992628 C636.737623,720.057495 650.08004,699.769623 645.707723,691.437197 C641.335406,683.104771 659.082175,670.417002 658.402037,646.092378 C657.430411,611.247688 724.681438,568.695642 763.92347,525.657904 C786.61288,500.781826 825.854912,482.402009 845.955911,483.741257 C906.527077,487.783241 995.858374,570.956001 1049.72921,661.691574 C1141.33411,815.995982 1192.51937,1027.65172 1212.91185,1082.66391 C1228.45787,1058.42413 1236.22699,1031.15437 1244,990.752707 C1229.75596,936.219252 1136.47598,627.162001 992.679213,481.723295 Z M543.001263,494.914286 L531,398 L549,504 L543.001263,494.914286 Z M560,580 C573.473513,601.945875 575.77233,611.647875 583,629 C573.473513,629 565.914624,599.90625 560,580 Z M799.173296,2698.96574 C766.149205,2609.42664 688.93111,2432.90671 677.761197,2407.32411 C666.591284,2381.74151 664.163042,2359.56992 659.306558,2273.44183 C654.450074,2187.31375 664.023175,2080.95153 665.619987,2041.49293 C679.785379,1691.81631 708.099169,1524.57609 714.657364,1196 C707.302329,1198.24367 676.249075,1168.06148 665.619987,1155.36442 C649.747896,1136.40428 633.616287,1113.75207 625.5,1107.46395 C601.170958,1468.44466 618.997741,2075.60306 593.258376,2251.27025 C577.231979,2193.28302 587.916243,1349.05723 566.015443,1042.23658 C518.375278,996.358453 511.086667,959.860611 506.327313,945.418381 C500.98518,946.837362 509.768018,925.323735 505.987731,921.135011 C528.141068,1174.5733 535.466217,2108.00087 512.640742,2330.56948 C503.339604,2421.24786 496.128696,2461.8935 449.992099,2602.5978 C403.855501,2743.30209 381.803179,2899.35595 382.001323,2959.90144 C382.075142,2982.33226 371.491892,2982.93544 382.001323,2984.5318 C385.630698,2993.09531 388.097267,3039.865 388.097267,3024.11405 C388.097267,3008.36311 405.214275,3046.07979 408.368176,3041.14315 C423.123795,3018.04689 398.716024,2991.5318 388.097267,2984.5318 C381.752067,2980.34897 403.97449,2980.10392 423.678244,2984.5318 C436.948924,2987.51402 449.399415,2996.48004 449.992099,2993.189 C469.237909,2886.32141 524.991579,2658.02376 529.152787,2645.23546 C538.865755,2615.3891 566.062065,2511.35319 606.856531,2472.97929 C660.277854,2525.85 711.270936,2647.79372 743.809379,2739.89108 C776.347821,2831.98844 796.745054,2937.67435 799.173296,2945.34913 C800.259186,2948.78123 813.786398,2989.63046 825.877261,2988.13964 C829.937941,2987.63895 812.542696,3000.1636 815.217995,3003.46881 C822.389862,3012.32933 827.668058,3019.78307 834.902733,3014.2897 C845.217688,3018.57428 830.51514,3019.62961 835,3017.26653 C850.152652,3009.28259 869.07974,2978.6412 865.707126,2964.16521 C861.336291,2945.40463 832.197387,2788.50484 799.173296,2698.96574 Z"
                  id="grouped-organs"
                />

                <g id="heart-beating" transform="translate(514.000000, 696.000000)">
                  <path
                    aria-owns={openHeart ? 'heart-over-popover' : undefined}
                    aria-haspopup="true"
                    onMouseEnter={this.handleHeartPopoverOpen}
                    onMouseLeave={this.handleHeartPopoverClose}
                    d="M297.994135,395.942789 C280.53821,428.624641 261.878086,454.633846 247.734946,466.757599 C232.838562,479.525574 216.138359,486.002478 198.100156,486.002478 C161.73633,486.002478 119.274699,460.032918 68.292,406.60961 C20.5502306,356.58581 5.70588036,299.108862 1.65967373,259.69985 C-2.96881004,214.641511 4.7395481,170.140672 21.2960409,146.331731 C21.4893073,146.054221 21.6949627,145.786621 21.9154846,145.53141 C22.4531618,144.904533 23.9869046,143.132924 26.1177911,140.727004 C59.3274099,148.784729 112.032163,167.266453 145.724948,207.498086 C175.706026,243.294502 189.162822,277.279664 199.975832,304.589701 C209.037055,327.476909 216.861869,347.24212 231.386586,361.76436 C250.849509,381.222327 278.729434,391.121038 297.994135,395.942789 Z M160.92362,194.767278 C186.863447,225.739466 201.046231,254.992078 211.524741,280.205917 C226.490503,277.08392 261.967286,266.925042 290.739209,237.186786 C313.465362,213.699957 325.769993,172.900913 331.984253,144.042267 C322.006253,128.635462 308.940945,121.739814 296.319159,116.662853 C293.583695,115.565199 299.78061,113.692001 293.42264,113.692001 C292.999026,113.692001 259.67081,94.0795488 223.401221,93.8422144 C186.480467,93.6006191 146.60025,112.729291 145.402837,112.17808 C133.905961,106.87812 125.040482,66.9859415 121.702919,51.9656693 C117.05709,31.0656368 116.982757,10.544704 116.982757,10.3440042 C116.982757,7.2690854 115.555559,4.36761083 113.117428,2.48945736 C110.679298,0.613781656 107.510223,-0.0230065284 104.536893,0.762448158 L76.4562687,8.19577326 C71.2033856,9.58828283 68.049178,14.9477102 69.3846988,20.21546 C69.4491209,20.468193 75.8442583,45.7687539 80.143198,68.7575507 C82.7597284,82.7569796 76.827935,96.872864 65.0262925,104.715022 C62.3478177,106.496542 59.7833205,108.226029 57.5434119,109.782072 C53.0685502,112.889202 47.23339,118.352696 41.5766295,124.098656 C77.2863234,133.955245 126.958279,154.213534 160.92362,194.767278 Z M304.983938,250.968171 C274.39085,282.587058 237.925434,294.577012 219.047266,298.898252 C227.335424,319.815628 234.07745,336.416721 245.40336,347.742631 C263.119451,365.456245 290.444354,373.972357 307.238713,377.746009 C330.666076,329.236129 349.767244,270.245261 349.068511,219.983594 C348.820734,202.123792 347.148236,187.547041 344.432594,175.51001 C336.506192,202.004859 324.092539,231.220304 304.983938,250.968171 Z"
                    id="Heart-Shape"
                  />
                </g>
              </g>
              <path
                d="M1921.08497,769.817301 C1915.03409,766.137554 1908.08866,763.892517 1905.64995,764.828236 C1900.76081,766.704438 1887.7438,752.111858 1887.7438,744.75502 C1887.7438,742.199119 1884.97423,734.586418 1881.58785,727.837481 C1877.03426,718.760615 1874.90297,704.805975 1873.39904,674.224894 C1872.28184,651.48687 1870.41462,629.534366 1869.24741,625.441527 C1867.42316,619.032126 1868.3724,618 1876.10221,618 C1882.45388,618 1891.3716,623.769039 1906.62419,637.744929 C1920.05878,650.05548 1934.68558,659.926811 1945.47091,663.96215 C1965.99234,671.640165 2008.69967,680.829064 2024.03234,680.865353 C2036.87356,680.895119 2043.1889,690.962079 2043.1889,711.398972 C2043.1889,726.491521 2034.16961,740.014123 2016.14862,751.939785 L2003.50076,760.309725 L2003.50076,729.247972 C2003.50076,694.904604 2000.81712,689.499516 1984.68365,691.349468 L1975.38819,692.415111 L1975.38819,730.147948 C1975.38819,757.380459 1974.23974,768.271494 1971.25414,769.28487 C1968.28144,770.295043 1967.12009,765.620748 1967.12009,752.627921 C1967.12009,731.002454 1961.64539,724.306134 1947.90532,729.124416 C1939.87004,731.942039 1938.81533,734.246412 1937.02546,752.897613 C1935.9356,764.25682 1934.37698,774.216005 1933.56447,775.029143 C1932.75195,775.842047 1927.13546,773.496696 1921.08458,769.817144 L1921.08497,769.817301 Z M1752.90959,759.469594 C1753.57757,748.949385 1752.55802,745.427297 1748.83531,745.224364 C1746.10479,745.075924 1741.25081,743.757152 1738.04412,742.293457 C1730.45727,738.829729 1723.16966,744.957562 1721.3583,756.323918 C1720.58094,761.193138 1720.12,747.520924 1720.33485,725.9412 L1720.72548,686.705331 L1738.13045,680.218585 C1750.17244,675.730622 1759.26477,669.270713 1767.63756,659.254183 C1786.91639,636.190373 1828.3198,610.639139 1828.14792,621.911509 C1827.91354,637.659732 1820.44232,673.386834 1811.70859,700.587352 C1800.55138,735.335493 1791.0856,753.601374 1784.23549,753.601374 C1781.82139,753.601374 1776.54708,758.06629 1772.51225,763.52341 C1768.47781,768.980529 1762.21755,773.445445 1758.60109,773.445445 C1752.93576,773.445445 1752.14825,771.510258 1752.91233,759.469789 L1752.90959,759.469594 Z M1661.49131,732.807639 C1645.50121,717.686535 1643,713.66065 1643,703.041532 L1643,690.761607 L1667.80509,690.761607 L1692.61018,690.761607 L1692.57385,708.125169 C1692.53479,733.033893 1689.09723,750.293821 1684.21004,750.293821 C1681.88579,750.293821 1671.66179,742.42506 1661.49171,732.807639 L1661.49131,732.807639 Z"
                id="path958"
                fill="#59070A"
                fillRule="nonzero"
                aria-owns={openPituitary ? 'pituitary-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={this.handlePituitaryPopoverOpen}
                onMouseLeave={this.handlePituitaryPopoverClose}
              />
              <g id="Ovary-Shape" transform="translate(1614.000000, 3747.000000)">
                <g
                  id="Main-Ovary"
                  transform="translate(107.000000, 30.000000)"
                >
                  <polygon id="Triangle" fill="#E70A17" transform="translate(116.902036, 62.026869) scale(1, -1) translate(-116.902036, -62.026869) " points="116.902036 26.6261682 181.78117 97.4275701 52.0229008 97.4275701" />
                  <polygon id="Triangle-Main" stroke="#D23636" strokeWidth="30" transform="translate(117.500000, 76.398949) scale(1, -1) translate(-117.500000, -76.398949) " points="117.5 0 235 152.797897 0 152.797897" />
                  <path d="M117.5,157.611098 L117.5,258.848715" id="Line" stroke="#D23636" strokeWidth="30" strokeLinecap="square" />
                </g>
                <g
                  id="Right-Ovary"
                  transform="translate(342.000000, 0.000000)"
                  aria-owns={open ? 'ovary-over-popover' : undefined}
                  aria-haspopup="true"
                  onMouseEnter={this.handleOvaryPopoverOpen}
                  onMouseLeave={this.handleOvaryPopoverClose}
                >
                  <path d="M-7.95807864e-13,29.103213 C52.5931301,4.36582995 83.6498087,-4.57406767 93.1700356,2.28352018 C97.2402435,5.21536287 105.146347,11.8458316 104.89697,21.9349577 C104.67436,30.9412022 93.3326879,45.6362522 70.8719552,66.0201078" id="Line-2" stroke="#D23636" strokeWidth="30" strokeLinecap="square" />
                  <ellipse id="Oval" stroke="#F8E71C" strokeWidth="20" fill="#FB6767" transform="translate(52.549744, 77.403958) rotate(-33.000000) translate(-52.549744, -77.403958) " cx="52.5497444" cy="77.4039582" rx="26.59173" ry="17.6442245" />
                </g>
                <g
                  id="Left-Ovary"
                  transform="translate(52.500000, 53.500000) scale(-1, 1) translate(-52.500000, -53.500000) "
                  aria-owns={open ? 'ovary-over-popover' : undefined}
                  aria-haspopup="true"
                  onMouseEnter={this.handleOvaryPopoverOpen}
                  onMouseLeave={this.handleOvaryPopoverClose}
                >
                  <path d="M-7.95807864e-13,29.103213 C52.5931301,4.36582995 83.6498087,-4.57406767 93.1700356,2.28352018 C97.2402435,5.21536287 105.146347,11.8458316 104.89697,21.9349577 C104.67436,30.9412022 93.3326879,45.6362522 70.8719552,66.0201078" id="Line-2" stroke="#D23636" strokeWidth="30" strokeLinecap="square" />
                  <ellipse id="Oval" stroke="#F8E71C" strokeWidth="20" fill="#FB6767" transform="translate(52.549744, 77.403958) rotate(-33.000000) translate(-52.549744, -77.403958) " cx="52.5497444" cy="77.4039582" rx="26.59173" ry="17.6442245" />
                </g>
                <image className={`${appearOvule ? 'appearOvule' : 'notAppearOvule'}`} width="300" opacity="1" height="350" href={eggCell} />
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  svg: state.svg,
  simulation: state.simulation,
});

const mapDispatchToProps = {
  dispatchAppendSvg: appendSvg,
};
const StyledComponent = withStyles(styles)(Body);

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(StyledComponent);

export default withTranslation()(ConnectedComponent);
