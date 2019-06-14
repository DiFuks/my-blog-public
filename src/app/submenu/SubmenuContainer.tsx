import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IRootState } from '@app/reducers';

import { Submenu } from './Submenu';
import { Creators } from './duck/actions';
import { SubmenuStates } from './duck/constants';

const mapStateToProps = (state: IRootState) => ({
  isActive: state.submenu.isActive,
  items: state.submenu.items,
  activeUrl: state.post.url,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  init: () => dispatch(Creators.submenuInit(true)),
  submenuDisable: () => dispatch(Creators.submenuChangeActive(SubmenuStates.DISABLE)),
});

export const SubmenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Submenu);
