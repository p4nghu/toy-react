import {Component, createElement, render} from './react'

class MyComponent extends Component {
  render(){
    return (
      <div>
        <div className="test">
          {this.children}
        </div>
      </div>
    )
  }
}

window.a = <MyComponent>
  <div>
  1
  </div>
  <div>
  2
  </div>
  <div>
  3
  </div>
</MyComponent>

render(a, document.body)