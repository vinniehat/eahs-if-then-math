// ANCHOR  Imports

import React from 'react'
import "./index.css";
import Logo from "./logo192.png"
import Node from "./nodejs.png"

// ANCHOR Class

class App extends React.Component {
    state = {
      condition: '',
      converse: '',
      inverse: '',
      contrapositive: '',
      counterExample: '',
    }
// ANCHOR On condition Being Typed
    handleChange = event => {
      const condition = event.target.value;
      
      // ANCHOR WALMART
      if(condition.toLowerCase() === "if you shop at walmart, then you live better and save money.") {
        this.setState({
          converse: "If you save money and live better then you shop at Walmart.",
          inverse: "If you don't shop at Walmart, then you don't live better and save money.",
          contrapositive: "If you don't save money and live better then you don't shop at Walmart.",
          counterExample: "I don't have to shop at Walmart in order to save money and live better. I can easily live better by being more fit, or going to school.",
        })
      }

      //ANCHOR M&Ms

      if(condition.toLowerCase() === "if it melts in your mouth, then it doesn't melt in your hands.") {
        this.setState({
          converse: "If an M&M doesn't melt in your hands, then it melts in your mouth.",
          inverse: "If it doesn't melt in your mouth, it does melt in your hands.(double negatives here)",
          contrapositive: "If it melts in your hands, then it doesn't melt in your mouth.",
          counterExample: "False: It could melt in a sink or a cup with hot water.",
        })
      }

      //ANCHOR React.JS

      if(condition.toLowerCase() === "if you use react js, then you use javascript") {
        this.setState({
          converse: "If you use Javascript(JS), then you use React.js",
          inverse: "If you don't use React.js, then you don't use JS.",
          contrapositive: "If you don't use Javascript, then you don't use React.js",
          counterExample: "False: I don't need to have React.js in order to code in Javascript. I could also use other things such as Vue, and Angular.",
        })
      }

      // ANCHOR Staples

      if(condition.toLowerCase() === "if you shop at staples, then it was very easy.") {
        this.setState({
          converse: "If you shop easily, then it was at Staples.",
          inverse: "If you don't shop at Staples, then you didn't shop easily.",
          contrapositive: "If you don't shop easily, then you don't shop at Staples.",
          counterExample: "False: I could also shop easily by just going onto Amazon from my couch.",
        })
      }

      // ANCHOR McDonalds
      if(condition.toLowerCase() === "if you eat at mcdonalds, then you are lovin' it.") {
        this.setState({
          converse: "If you are lovin' it, then you eat at Mc. Donalds",
          inverse: "If you don't eat at Mc. Donalds, then you aren't lovin' it.",
          contrapositive: "If you aren't lovin' it, then you don't eat at Mc.Donalds",
          counterExample: "False: I can love life and other things, and still not eat at Mc. Donalds.",
        })
      }


      this.setState({
        condition: event.target.value,
      })
    }

  render() {
    return(
      <div>
        <h1 className="title center">Project <span className="fire">If Then.</span></h1>
        <h3 className="center src-code">Want to see the source code? Visit: <a href="https://github.com/vinniehat/eahs-if-then-math">https://github.com/vinniehat/eahs-if-then-math</a></h3>
        <h3 className="center made-with">Made with ❤️, React <img src={Logo} className="logo" alt="react logo"></img>, Node.JS <img src={Node} className="logo" alt="node"></img></h3>

        <form>
         <input type="text" value={this.state.condition} onChange={this.handleChange} placeholder="Ask your condition here"/>
          <p>Converse: <span className="response">{this.state.converse}</span></p>
          <p>Inverse: <span className="response">{this.state.inverse}</span></p>
          <p>Contrapositive: <span className="response">{this.state.contrapositive}</span></p>
          <p>Counter Example(Converse): <span className="response">{this.state.counterExample}</span></p>
        </form>


      </div>
    )
  }
}



export default App;