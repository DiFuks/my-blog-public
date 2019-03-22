import { connect } from 'react-redux';

import { IRootState } from '@app/common/typings';
import { Routes } from '@app/common/constants';
import { Submenu } from './Submenu';

const mapStateToProps = (state: IRootState) => ({
  isActive: state.router.location.pathname === Routes.LIST,
});

export const SubmenuContainer = connect(
  mapStateToProps,
)(Submenu);
