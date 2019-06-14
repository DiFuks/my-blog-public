import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { SubmenuItem } from './SubmenuItem';
import { Creators } from './duck';
import { SubmenuStates } from '@app/submenu/duck/constants';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  submenuDisable: () => dispatch(Creators.submenuChangeActive(SubmenuStates.DISABLE)),
});

export const SubmenuItemContainer = connect(
  null,
  mapDispatchToProps,
)(SubmenuItem);
