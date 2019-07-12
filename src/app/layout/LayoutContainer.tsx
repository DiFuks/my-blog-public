import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IRootState } from '@app/reducers';
import { Creators as SubmenuCreators } from '@app/submenu/duck/actions';
import { SubmenuStates } from '@app/submenu/duck/constants';

import { Layout } from './Layout';

const mapStateToProps = (state: IRootState) => ({
  menuIsOpen: state.submenu.isActive,
  title: state.layout.title,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  submenuDisable: (menuIsOpen: SubmenuStates) =>
    dispatch(SubmenuCreators.submenuChangeActive(menuIsOpen === SubmenuStates.INIT
      ? SubmenuStates.INIT : SubmenuStates.DISABLE,
    )),
});

export const LayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Layout);
