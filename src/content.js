import React from 'react'
import ReactDom from 'react-dom'
import AppRoutes from './Routes.js'
import './content.scss'

import registration from 'bundle-loader!offline/sw-register.js'

ReactDom.render(<AppRoutes/>,document.getElementById('content'));
