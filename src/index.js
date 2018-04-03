// css imports
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// javascript imports
import 'bootstrap';

import numeral from 'numeral'

const courseValue = numeral(1000).format('$0,0.00')
console.log(`I would pay ${courseValue} for this awesome course!`) // eslint-disable-line no-console
