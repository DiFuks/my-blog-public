import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IRootState } from '@app/reducers';

import { Category } from './Category';
import { Creators } from './duck/actions';

const mapStateToProps = (state: IRootState) => ({
  items: state.category.items,
  fetchStatus: state.category.fetchStatus,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeActive: (url: string) => dispatch(Creators.categoryChangeActive(url)),
});

export const CategoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Category);
