import * as React from 'react';
import { connect } from 'react-redux';

import { IRootState } from '@app/reducers';
import { Dispatch } from 'redux';
import { Layout } from './Layout';
import { Creators as SubmenuCreators } from '@app/submenu/duck';
import { SubmenuStates } from '@app/submenu/duck/constants';

const mapStateToProps = (state: IRootState) => ({
  menuIsOpen: state.submenu.isActive,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  submenuDisable: () => dispatch(SubmenuCreators.submenuChangeActive(SubmenuStates.DISABLE)),
});

export const LayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Layout);
