import React from 'react';
import axios from "axios";
import Student from './Student'

export default class StudentList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      students:[],
      keywords: '',
      on:false,
    }
  }
}

componentDidMount() {
  axios.get('https://api.hatchways.io/assessment/students')
  .then(res => {
    this.setState({students:res.data.students});

  }) 
}

searchHandler = (e) => {
  this.setState({keywords:e.target.value});
}

searchStudents = (keyWord) => {
  return x=> {
    return x.firstName.toLowerCase().includes(keyWord.toLowerCase())||x.lastName.toLowerCase().includes(keyWord.toLowerCase()) || !keyWord;
  }
}
  render(){

  }

