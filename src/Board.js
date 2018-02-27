import React, { Component } from'react'
import Blank from './spaces/BlankPiece'
import X from './spaces/XPiece'
import O from './spaces/OPiece'


export default class extends Component{


    render() {


        return(
        <div className="ttt">
            <div className="row">
                <div className="square" id="top-left"><O/></div>
                <div className="square" id="top-mid"><Blank/></div>
                <div className="square" id="top-right"><O/></div>
            </div>
            <div className="row">
                <div className="square" id="center-left"><Blank/></div>
                <div className="square" id="center-mid"><X/></div>
                <div className="square" id="center-right"><Blank/></div>
            </div>
            <div className="row">
                <div className="square" id="bottom-left"><X/></div>
                <div className="square" id="bottom-mid"><O/></div>
                <div className="square" id="bottom-right"><X/></div>
            </div>
        </div>
        )
    }

}