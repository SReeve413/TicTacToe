import React, { Component } from'react'


export default class extends Component{
    state = {
        val:'X'
    };

    changeVal = () => {
        console.log(this.state.val);
        let test = this.state.val;
        if(test=== ' '){
            test = 'X'
        }else if(test=== 'X'){

            test = 'O'
        }else{
            test =' '
        }
        console.log(this.state.val);
        return test
    }

    render() {

        return(
            <div className="piece">
                <button  onClick={e => this.setState({val: this.changeVal()})}>{this.state.val}</button>


            </div>
        )
    }

}