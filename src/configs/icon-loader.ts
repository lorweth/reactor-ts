import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faCalculator,
  faEye,
  faHome,
  faInfoCircle,
  faList,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

const loadIcon = () => {
  library.add(faHome, faInfoCircle, faUsers, faEye, faBars, faList, faCalculator);
};

export default loadIcon;
