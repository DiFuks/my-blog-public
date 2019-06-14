import * as React from 'react';
import { connect } from 'react-redux';

import { IRootState } from '@app/reducers';

import { PostPage } from './PostPage';

const mapStateToProps = (state: IRootState) => ({
  title: state.post.data && state.post.data.title,
});

export const PostPageContainer = connect(
  mapStateToProps,
)(PostPage);
