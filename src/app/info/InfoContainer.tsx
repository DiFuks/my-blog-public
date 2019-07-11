import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IRootState } from '@app/reducers';

import { Info } from './Info';
import { Creators } from './duck/actions';
import { Locales } from '@app/common/constants';

const mapStateToProps = (state: IRootState) => ({
  items: state.info.items,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  init: (locale: Locales) => dispatch(Creators.infoInit(locale)),
});

export const InfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Info);
