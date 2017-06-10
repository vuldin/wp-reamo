import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'
import Reddit from './Reddit'

@inject('store')
@observer
export default class App extends Component {
  render () {
    return (
      <div>
        <Button onClick={() => this.props.store.toggle()}>
          <SymbolStyled name='first-order' />
          <span>Seconds passed: {this.props.store.timer}</span>
        </Button>
        <Reddit />
      </div>
    )
  }
}

const Button = styled.button`
  background-color: orange;
  box-sizing: border-box;
  border: 1px solid grey;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`
const Symbol = props =>
  <FontAwesome name={props.name} className={props.className}>
    {props.children}
  </FontAwesome>
const SymbolStyled = styled(Symbol)`
  margin-right: 8px;
`
