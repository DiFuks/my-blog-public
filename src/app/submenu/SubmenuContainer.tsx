import { connect } from 'react-redux';

import { IRootState } from '@app/reducers';
import { Submenu } from './Submenu';

const mapStateToProps = (state: IRootState) => ({
  isActive: state.submenu.isActive,
});

export const SubmenuContainer = connect(
  mapStateToProps,
)(Submenu);
