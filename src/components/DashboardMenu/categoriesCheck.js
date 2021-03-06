import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { setCategoriesFilter, 
         changeKpiFilter, 
         changeTrendFilter, 
         changeTreeMapFilter,
         changePivotFilter } from '../../redux/actions';

/*
 * Component that list the categories as checkboxes. 
*/
class CategoriesCheck extends React.Component{

  onChange(e){
        this.props.dispatch(setCategoriesFilter(e.target.id));
        this.props.dispatch(changeKpiFilter());
        this.props.dispatch(changeTrendFilter());
        this.props.dispatch(changeTreeMapFilter());
        this.props.dispatch(changePivotFilter());
      }

    render() {
        return (  
              <div className="category">
                {this.props.categories.map((c, i) => {
                    return( <div key={i} className="option">
                              <input type="checkbox" 
                                  key={i}
                                  onChange={this.onChange.bind(this)}
                                  checked={c.checked}
                                  id={c.val}
                                  className="filled-in" />
                              <label htmlFor={c.val}>{c.val}</label>
                            </div>
                    )})}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.chartFilters.categories,
    }
};

export default connect(mapStateToProps)(CategoriesCheck);
