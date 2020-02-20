import React from 'react';
import {connect} from 'react-redux';
import * as courseActions from "../../redux/actions/CourseActions";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";

class CoursesPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            course: {
                title: ""
            }
        };

    }

    handleChange = (event) => {
        const course = {...this.state.course, title: event.target.value};
        this.setState({course});
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.actions.createCourse(this.state.course);
    }

    render() {
       return  (
           <form onSubmit={this.handleSubmit}>
               <h2>Courses</h2>
               <h3>Add Courses</h3>
               <input type="text" onChange={this.handleChange} value={this.state.course.title}/>
               <input type="submit" value="Save"/>
               {this.props.courses.map((course)=>(
                   <div key={course.title}>{course.title}</div>
               ))}
           </form>
       );
    }
}


//Deal with warnings
CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

//What part of state we expose to this component
//Function determines what state is passed to our component via props
function mapStateToProps(state) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch){
    return {
      actions: bindActionCreators(courseActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);