## Level up with 
## _React Hooks_

--- 
#Today's Objectives 

<br>
- _Understand the differences between class and function components_
- _Learn how to pass data between components with props_
- _Investigate React hooks and use them in function components_
- _Use React Router to switch between components_

---

Why are function based components better than class based components?

---

#Here are a few reasons...

<br>
- _Function components are easier to test_
- _They are less of a hassle to debug_
- _The are more reusable than class components_

---

### _1000 Mile View_: Class based vs Function based

---
#Class Based

[.code-highlight: all]
[.code-highlight: 1,12]
[.code-highlight: 2,7]
[.code-highlight: 3]
[.code-highlight: 4-6]
[.code-highlight: 9,11]
[.code-highlight: 10]
[.code-highlight: 14]
``` javascript
class App extends React.component() {
  constructor() {
    super();
    this.state = {
        name: 'Jeanette'
    }
  }

  render() {
    return <p>Hello {this.state.name}!</p>
  }
}

export default App;
```
---
#Function Based

[.code-highlight: all]
[.code-highlight: 1,5]
[.code-highlight: 2]
[.code-highlight: 4]

``` javascript
export default function App() {
  [name, setName] = useState("Jeanette");

  return <p>Hello {name}!</p>;
}
```
---

#_Code Break!_

<br>
<br>
#Let's play with some code
