import React from 'react';
import {connect} from 'react-redux';
import * as courseActions from "../../redux/actions/CourseActions";
import PropTypes from "prop-types";


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
        this.props.dispatch(courseActions.createCourse(this.state.course));
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
export default connect(mapStateToProps)(CoursesPage);