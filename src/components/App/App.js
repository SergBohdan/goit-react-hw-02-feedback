import React, {Component} from 'react';
import { GlobalStyle } from '../GlobalStyles';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleIncrement = () =>{
    console.log('click increase value');
    console.log(this);
  };

render(){
  return(
<div>
<span>0</span>
 <div>
  <button type='button' onClick={this.handleIncrement}>increase 1</button>
  <button type='button'>decrease 1</button>
 </div>
<GlobalStyle />
</div>
  );
}
};

export default App;