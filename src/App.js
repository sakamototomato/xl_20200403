//应用根组件
import React, { Component } from 'react'
import { Button } from 'antd';

export default class App extends Component{
    render(){
        return (

            <div>app
                  <Button type="primary">Button</Button>
            </div>
        )
    }
}