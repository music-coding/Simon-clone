import React from "react";
import {observer} from "mobx-react"


@observer
export default class Button extends React.Component {

  constructor(props){
      super(props);
      this.Color =  this.props.store.color;
  }



     timerID () {
      const Random = this.props.store.random;


      for(let i = 0; i <= Random.length-1; i++){
        setTimeout(() => {
               if(Random[i] === 0){
                    this.green();
                } else if (Random[i] === 1){
                 this.red ();
               } else if (Random[i] === 2){
                  this.blue();
              } else if (Random[i] === 3){
                 this.yellow();
             }

          }, i*1000
        )
      }
    };


    green () {
      this.Color[0] = '#003300';
      setTimeout(() => {
        this.Color[0] = 'green'
      }, 700);
    }

    red () {
      this.Color[1] = '#800000';
      setTimeout(() => {
        this.Color[1] = 'red'
      }, 700);
    }

    blue () {
      this.Color[2] = '#000066';
      setTimeout(() => {
        this.Color[2] = 'blue'
      }, 700);
    }

    yellow () {
      this.Color[3] = '#cc9900';
      setTimeout(() => {
        this.Color[3] = 'yellow'
      }, 700);
    }





fun () {

  let Sequence =  this.props.store.sequence;
  let Random = this.props.store.random;
  let Round = this.props.store.round;

  if(Sequence.length === Random.length){
        for(var i = Sequence.length; i--;) {
            if(Sequence[i] !== Random[i]){
                 this.props.store.random = [];
                 this.props.store.round = 0;
                 alert('you lose!');

            }
          }

          Random.push(Math.floor(Math.random()*4));
          // alert('they match!');
          this.timerID();
          this.props.store.sequence = [];
          this.props.store.round++;
          if(this.props.store.round > this.props.store.highestRound){
            this.props.store.highestRound = this.props.store.round
          };
        }
};



trigger(){

  let Sequence =  this.props.store.sequence;
  let Random = this.props.store.random;
  let Round = this.props.store.round;


  if(this.props.name === "start"){
    Sequence = [];
    Random.push(this.props.num);
    this.timerID ();



  }  else if (this.props.name === "check"){

   this.fun();

} else {
    Sequence.push(this.props.num)
    if(Random.length === Sequence.length){
      this.fun()}
  }

}



 render () {

   var buttonStyle = this.props.color;

    return (

          <div class="col-md-1 .col-md-offset-1">
           <button type="button" style= {{'backgroundColor': buttonStyle}} class="btn btn-default" onClick={this.trigger.bind(this)} >{this.props.name}</button>
          </div>


   )
 }

}
