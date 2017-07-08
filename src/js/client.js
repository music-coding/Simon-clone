import React from "react";
import ReactDom from "react-dom";

import store from "./DataStore"


//components

import Button from "./components/Button";
import {observer} from "mobx-react"


@observer


class Layout extends React.Component {

constructor(props){
    super(props);

  }


componentDidMount() {

}

render() {




    return (

    <div class="container center" style= {{'backgroundColor': '#F0F8FF'}}>
          <h2>Top Score</h2>
          <h5>{this.props.store.highestRound}</h5>
           <h2>Round</h2>
           <h5>{this.props.store.round}</h5>
      <div class="form-group">

        <Button name = "start" store={store} num = {Math.floor(Math.random()*4)} />
        <Button name = "Green" color = {this.props.store.color[0]} store={store} num= {0}/>
        <Button name = "Red" color = {this.props.store.color[1]} store={store} num = {1} />
        <Button name = "Blue" color = {this.props.store.color[2]} store={store} num = {2} />
        <Button name = "Yellow" color = {this.props.store.color[3]} store={store} num = {3} />
      </div>
    </div>
  )
  }
}

const app = document.getElementById('app');

ReactDom.render(<Layout store = {store}/> , app);
