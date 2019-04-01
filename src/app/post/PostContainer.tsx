import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IRootState } from '@app/reducers';
import { Creators } from './duck/actions';
import { Post } from './Post';

const mapStateToProps = (state: IRootState) => ({
  data: state.post.data,
  fetchStatus: state.post.fetchStatus,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeActive: (id: number) => dispatch(Creators.postChangeActive(id)),
});

export const PostContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post);
