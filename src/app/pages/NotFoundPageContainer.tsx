import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Creators } from '@app/layout/duck/actions';

import { NotFoundPage } from './NotFoundPage';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setLayoutTitle: (title: string) => dispatch(Creators.layoutSetTitle(title)),
});

export const NotFoundPageContainer = connect(
  null,
  mapDispatchToProps,
)(NotFoundPage);

export default NotFoundPageContainer;
