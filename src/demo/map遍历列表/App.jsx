import React, { PureComponent } from 'react'

let data = [
  {id: 1, title: "aaa"},
  {id: 2, title: "bbb"},
  {id: 3, title: "ccc"}
]

export class App extends PureComponent {

  
  render() {
    
    return (
      <div>
        {data.map((item,index) => {
          return <li key={item.id}>
            {index + 1}
            &nbsp;
            <span>{item.title}</span>
          </li>
        })}
      </div>
    )
  }
}

export default App