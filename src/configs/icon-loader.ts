import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faEye,
  faHome,
  faInfoCircle,
  faList,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

const loadIcon = () => {
  library.add(faHome, faInfoCircle, faUsers, faEye, faBars, faList);
};

export default loadIcon;
