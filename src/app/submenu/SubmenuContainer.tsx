import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IRootState } from '@app/reducers';
import { Locales } from '@app/common/constants';

import { Submenu } from './Submenu';
import { Creators } from './duck/actions';
import { SubmenuStates } from './duck/constants';

const mapStateToProps = (state: IRootState) => ({
  isActive: state.submenu.isActive,
  items: state.submenu.items,
  activeUrl: state.category.url,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  init: (locale: Locales) => dispatch(Creators.submenuInit(locale)),
  submenuDisable: () => dispatch(Creators.submenuChangeActive(SubmenuStates.DISABLE)),
  submenuInit: () => dispatch(Creators.submenuChangeActive(SubmenuStates.INIT)),
});

export const SubmenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Submenu);
