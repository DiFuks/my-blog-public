import * as React from 'react';
import { connect } from 'react-redux';

import { IRootState } from '@app/reducers';
import { getCategoryTitle } from '@app/category/duck/selectors';

import { CategoryPage } from './CategoryPage';

const mapStateToProps = (state: IRootState) => ({
  title: getCategoryTitle(state),
});

export const PostPageContainer = connect(
  mapStateToProps,
)(CategoryPage);

export default PostPageContainer;
