import React from 'react';
import { addWidget } from '../../redux/actions'
import { connect } from 'react-redux';
import $ from 'jquery';

/*
This is a react component that use materialize.css which behaves as a floating
button and allows to create new empty widgets. NOT USED AT THIS MOMENT on the dashboard.
*/
class AddWidgetButton extends React.Component{

  handleEmptyWidgetClick(){
        let widgetVals = {
            id: 1,
            name: 'WIDGET NAME',
            type:'EMPTY',
            drow: 2,
            dcol: 1,
            dsizex: 2,
            dsizey: 1,
            height: 200,
            width: 400,
      };
      jwidget(widgetVals)
      //this.props.dispatch(addWidget(widgetVals));
  }

    render(){
        return( 
                <div className="fixed-action-btn" style={{bottom:'45px', right:'24px'}}>
                    <a className="btn-floating btn-large blue tooltipped" data-position="left" data-delay="50" data-tooltip="Add new chart">
                      <i className="large material-icons">add</i>
                    </a>
                    <ul>
                        <li><a className="btn-floating blue tooltipped" 
                                data-position="left" 
                                data-delay="50" 
                                onClick = {this.handleEmptyWidgetClick.bind(this)}
                                id="new" 
                                data-tooltip="Empty widget">
                                <i className="material-icons">crop_square</i></a></li>
                        <li><a className="btn-floating red tooltipped" 
                                data-position="left" 
                                data-delay="50" 
                                data-tooltip="Bar">
                              <i className="material-icons">insert_chart</i></a></li>
                      <li><a className="btn-floating yellow darken-1 tooltipped" 
                              data-position="left" 
                              data-delay="50" 
                              data-tooltip="Pie">
                              <i className="material-icons">pie_chart</i></a></li>
                      <li><a className="btn-floating blue-gray tooltipped" 
                              data-position="left" 
                              data-delay="50" 
                              data-tooltip="Donut">
                              <i className="material-icons">donut_large</i></a></li>
                      <li><a className="btn-floating green tooltipped" 
                              data-position="left" 
                              data-delay="50" 
                              data-tooltip="Bubble">
                              <i className="material-icons">bubble_chart</i></a></li>
                      <li><a className="btn-floating blue tooltipped" 
                              data-position="left" 
                              data-delay="50" 
                              data-tooltip="Lines">
                              <i className="material-icons">show_chart</i></a></li>
                    </ul>
                  </div>
              )
    }
}

//export default connect(mapStateToProps,mapDispatchToProps)(AddWidgetButton)
export default AddWidgetButton
