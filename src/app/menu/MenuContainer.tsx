import { connect } from 'react-redux';

import { IRootState } from '@app/common/typings';
import { Menu } from './Menu';

const mapStateToProps = (state: IRootState) => ({
  activePathName: state.router.location.pathname,
});

export const MenuContainer = connect(
  mapStateToProps,
)(Menu);
