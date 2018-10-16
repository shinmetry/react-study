import React from 'react';

const App = () => {
  const profiles = [
    {name: "Taro", age: 20},
    {name: "Hanako", age: 15},
    {name:  "Noname" }
  ]
    return (
      <div>
        {
          profiles.map((profile, index)=>{
            return <User name={profile.name} age={profile.age} key={index}/>
          })
        }
        </div>
        );
}

const User = (props) => {
  return <div >
    hellooo  {props.name}, and i'm {props.age} years old
    </div>
}

User.defaultProps = {
  age:1
}


export default App;