import React, { Component } from 'react';

const questions=["How many infinity stones exist?","What is Thanos's spaceship called?","How old is Captain America?(In 2018)","Which planet is homeworld of the Kree?"];
const options=[{
  option1:"7",
  option2:"6",
  option3:"5",
  correct:"1"
},{
  option1:"Sanctuary 2",
  option2:"Sanctuary",
  option3:"Titan",
  correct:"0"
},{
  option1:"85",
  option2:"98",
  option3:"100",
  correct:"1"
},{
  option1:"Hala",
  option2:"Contraxia",
  option3:"Titan",
  correct:"0"
}


];
class Questionbox extends Component {
  constructor(){
    super();
    this.state={
      question:questions[0],
      options:options[0],
      current:0,
      points:0
    }
  }
  onChange=(event)=>{

    const id=event.target.id;
    let p = this.state.points;
    if(id===this.state.options.correct){

      p++;

      this.setState({points:p});

    }
    if(this.state.current===3){
      let text ="";
      switch(p){
        case 4:
          text="4/4. Wonderful!"
          break;
        case 3:
          text="3/4. Not bad."
          break;
        case 2:
            text="2/4. You know something."
            break;
        case 1:
            text="1/4. You know a little."
            break;
        case 0:
          text="You know nothing!"
          break;
        default:
         text=""
      }
      this.setState({question:text});
      document.getElementById('questionsarea').remove();
    }else{


      let c = this.state.current;
      c++;
      this.setState({current:c,question:questions[c],options:options[c]});

      event.target.checked=false;
    }


  }
  render() {
    return (
      <div className="flex flex-wrap items-center">
      <div className="bg-gold  w-40   mt2 center ">
      <h3 className="tc ml-auto  mr-auto"> {this.state.question}</h3>
      <div id="questionsarea" className="flex">
      <div className="w-33 mb3">

        <input id="0" onChange={this.onChange} name="option" type="radio"/>
        <label> {this.state.options.option1}</label>
      </div>
      <div className="w-33">

        <input id="1" onChange={this.onChange} name="option" type="radio"/>
        <label>  {this.state.options.option2}</label>
      </div>
      <div className="w-33">

        <input id="2" onChange={this.onChange} name="option" type="radio"/>
        <label> {this.state.options.option3}</label>
      </div>
      </div>

      </div>

      </div>
    );
  }
}

export default Questionbox;
