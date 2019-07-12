import * as React from 'react';
import { connect } from 'react-redux';

import { IRootState } from '@app/reducers';
import { getPostDescription, getPostTitle } from '@app/post/duck/selectors';

import { PostPage } from './PostPage';

const mapStateToProps = (state: IRootState) => ({
  title: getPostTitle(state),
  description: getPostDescription(state),
});

export const PostPageContainer = connect(
  mapStateToProps,
)(PostPage);

export default PostPageContainer;
