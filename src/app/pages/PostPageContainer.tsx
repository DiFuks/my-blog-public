import * as React from 'react';
import { connect } from 'react-redux';

import { IRootState } from '@app/reducers';
import { getPostTitle } from '@app/post/duck/selectors';

import { PostPage } from './PostPage';

const mapStateToProps = (state: IRootState) => ({
  title: getPostTitle(state),
});

export const PostPageContainer = connect(
  mapStateToProps,
)(PostPage);
