import React from 'react';
import Head from './to-do-list/Head';
import Input from './to-do-list/Input';
import List from './to-do-list/List';

class App extends React.Component {

  render() {
    return (
        <div className='container'>
        <Head/>
        <Input/>
        <List/>
        </div>
    )}
  }
     
export default App;