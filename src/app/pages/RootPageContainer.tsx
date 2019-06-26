import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Creators } from '@app/layout/duck/actions';

import { Root } from './Root';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setLayoutTitle: (title: string) => dispatch(Creators.layoutSetTitle(title)),
});

export const PostPageContainer = connect(
  null,
  mapDispatchToProps,
)(Root);

export default PostPageContainer;
