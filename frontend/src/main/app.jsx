import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../templante/custom.css'

import React from 'react'
import Todo from '../todo/todo'
import Menu from '../templante/menu'


export default () => (
    <div>
       <Menu></Menu>
       <Todo></Todo>
    </div>
)