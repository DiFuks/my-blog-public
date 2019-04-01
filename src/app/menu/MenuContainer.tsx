import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Menu } from './Menu';
import { IRootState } from '@app/reducers';
import { Creators as SubmenuCreators } from '@app/submenu/duck';
import { SubmenuStates } from '@app/submenu/duck/constants';

const mapStateToProps = (state: IRootState) => ({
  activePathName: state.router.location.pathname,
  submenuIsActive: state.submenu.isActive,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeSubmenuActive: (isActive: SubmenuStates) => dispatch(SubmenuCreators.submenuChangeActive(isActive)),
});

export const MenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
