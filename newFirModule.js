import logName from "./function.js" // it was EXPORT DEFAULT
import {textText} from "./function.js" // it was EXPORT

import chai from 'chai'


logName('M', ' valya')  
textText('6', ' 5')  

chai.assert.include('my string', 'hjhj', 'no') // class assert, method include
 // это мы рассмотрели библиотеку chai.
 // ещё мы должны подключить jest.

 