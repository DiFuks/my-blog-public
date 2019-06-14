import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { SubmenuItem } from './SubmenuItem';
import { Creators } from './duck/actions';
import { SubmenuStates } from './duck/constants';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  submenuDisable: () => dispatch(Creators.submenuChangeActive(SubmenuStates.DISABLE)),
});

export const SubmenuItemContainer = connect(
  null,
  mapDispatchToProps,
)(SubmenuItem);
