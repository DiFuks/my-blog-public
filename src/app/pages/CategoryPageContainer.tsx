import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IRootState } from '@app/reducers';
import { Creators } from '@app/layout/duck/actions';
import { getCategoryTitle } from '@app/category/duck/selectors';

import { CategoryPage } from './CategoryPage';

const mapStateToProps = (state: IRootState) => ({
  title: getCategoryTitle(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setLayoutTitle: (title: string) => dispatch(Creators.layoutSetTitle(title)),
});

export const PostPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryPage);

export default PostPageContainer;
