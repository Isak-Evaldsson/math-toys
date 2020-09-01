import React from 'react'
import {MatrixTools} from './matrixTools'
import {useRouteMatch, Switch, Route} from 'react-router-dom';
import * as math from 'mathjs'
import '../css/matrixPage.css'

function Add() {
    const addOP = matrices => math.add(matrices[0], matrices[1]) 

    return <MatrixTools operation={addOP} nbrOfMatrices='2'/>
}

function Multiply() {
    const mulOP = matrices => math.multiply(matrices[0], matrices[1])

    return <MatrixTools operation={mulOP} nbrOfMatrices='2'/>
}

function Invert() {
    const invOP = matrices => math.inv(matrices[0])

    return <MatrixTools operation={invOP} nbrOfMatrices='1'/>
}

function Transpose() {
    const transOP = matrices => math.transpose(matrices[0])

    return <MatrixTools operation={transOP} nbrOfMatrices='1'/>
}

function Determinat() {
    const detOP = matrices => [[math.det(matrices[0])]]

    return <MatrixTools operation={detOP} nbrOfMatrices='1'/>
}


export function MatrixPage(props) {
    let match = useRouteMatch();


    return (<div>
        <div class='sidebar'>
            <a href="/matrix/">Add</a>
            <a href="/matrix/multiply">Multiply</a>
            <a href="/matrix/invert">Invert</a>
            <a href="/matrix/transpose">Transpose</a>
            <a href="/matrix/determinant">Determinat</a>
        </div>
        <div class='content'>
            <Switch>
                <Route path ={`${match.path}/invert`}>
                    <Invert/>
                </Route>
                <Route path ={`${match.path}/transpose`}>
                    <Transpose/>
                </Route>
                <Route path ={`${match.path}/multiply`}>
                    <Multiply/>
                </Route>
                <Route path ={`${match.path}/determinant`}>
                    <Determinat/>
                </Route>
                <Route>
                    <Add/>
                </Route>
            </Switch>
        </div>
    </div>)
}