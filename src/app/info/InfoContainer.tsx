import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IRootState } from '@app/reducers';

import { Info } from './Info';
import { Creators } from './duck/actions';

const mapStateToProps = (state: IRootState) => ({
  items: state.info.items,
  isInit: state.info.isInit,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  init: () => dispatch(Creators.infoInit(true)),
});

export const InfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Info);
