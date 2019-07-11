import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IRootState } from '@app/reducers';
import { Locales } from '@app/common/constants';

import { Creators } from './duck/actions';
import { Post } from './Post';

const mapStateToProps = (state: IRootState) => ({
  data: state.post.data,
  fetchStatus: state.post.fetchStatus,
  menuIsOpen: state.submenu.isActive,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeActive: (url: string, locale: Locales) => dispatch(Creators.postChangeActive(url, locale)),
});

export const PostContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post);
