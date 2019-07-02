import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IRootState } from '@app/reducers';
import { Creators as SubmenuCreators } from '@app/submenu/duck/actions';
import { SubmenuStates } from '@app/submenu/duck/constants';

import { Creators } from './duck/actions';
import { Menu } from './Menu';

const mapStateToProps = (state: IRootState) => ({
  submenuIsActive: state.submenu.isActive,
  menuNeedHide: state.menu.needHide,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeSubmenuActive: (isActive: SubmenuStates) => dispatch(SubmenuCreators.submenuChangeActive(isActive)),
  changeMenuNeedHide: (needHide: boolean) => dispatch(Creators.menuChangeHide(needHide)),
});

export const MenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
