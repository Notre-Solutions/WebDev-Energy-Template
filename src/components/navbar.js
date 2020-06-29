import React from "react"
import { Link } from "gatsby"
import classnames from "classnames"

class navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      active: false,
    }
    this.toggleClass = this.toggleClass.bind(this)
  }
  toggleClass() {
    const currentState = this.state.active
    this.setState({ active: !currentState })
  }
  render() {
    return (
      <header className="white-text-container section-container">
    <div className="text-center">
      <h1>I am David Folley</h1>
      <p>Web designer</p>
      <p>
        <a className="fa-icon fa-icon-2x" href="https://facebook.com/" title="">
          <i className="fa fa-facebook"></i>
        </a>
        <a className="fa-icon fa-icon-2x" href="https://twitter.com/" title="">
          <i className="fa fa-twitter"></i>
        </a>
        <a className="fa-icon fa-icon-2x" href="https://dribbble.com/" title="">
          <i className="fa fa-dribbble"></i>
        </a>
        <a className="fa-icon fa-icon-2x" href="https://www.linkedin.com/" title="">
          <i className="fa fa-linkedin"></i>
        </a>
        <a className="fa-icon fa-icon-2x" href="https://vimeo.com/" title="">
          <i className="fa fa-vimeo"></i>
        </a>
      </p>
    </div>
  </header>
    )
  }
}

export default navbar
