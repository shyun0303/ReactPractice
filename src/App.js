import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './Components/Customer';

const customers = [{
  'id':1,
  "image":'https://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday': '940303',
  'gender' : '남자',
  'job' : '백수',
},{
  'id':2,
  "image":'https://placeimg.com/64/64/2',
  'name' : '바보',
  'birthday': '930103',
  'gender' : '여자',
  'job' : '백수',
},
{
  'id':3,
  "image":'https://placeimg.com/64/64/3',
  'name' : '멍청이',
  'birthday': '980123',
  'gender' : '남자',
  'job' : '백수',
},

]

class App extends Component{
  render(){
    return(
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key = {c.id}     
                id = {c.id}
                image = {c.image}
                name = {c.name}
                birthday = {c.birthday}
                gender = {c.gender}
                job = {c.job}
              />
            );
          })
        }
    </div>
    );
  }
}

export default App;
