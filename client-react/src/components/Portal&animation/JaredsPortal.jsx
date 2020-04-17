import React from 'react'
import ReactDOM from "react-dom";

const portalRoot = document.getElementById('jaredsPortal')

class JaredsPortal extends React.Component{
  constructor(){
    super()
    this.el = document.
  }
  componentDidMount(){
    portalRoot.appendChild(this.el)
  }
  componentWillMount(){
    portalRoot.removeChild(this.el)
  }
  render(){
    const { children } = this.props
    return(
      ReactDOM.createPortal(children, this.el)
    )
  }

}