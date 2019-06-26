import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IRootState } from '@app/reducers';
import { getPostTitle } from '@app/post/duck/selectors';
import { Creators } from '@app/layout/duck/actions';

import { PostPage } from './PostPage';

const mapStateToProps = (state: IRootState) => ({
  title: getPostTitle(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setLayoutTitle: (title: string) => dispatch(Creators.layoutSetTitle(title)),
});

export const PostPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostPage);

export default PostPageContainer;
