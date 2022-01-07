
### tsconfig.json compilerOptions
[link-id] https://www.tslang.cn/docs/handbook/compiler-options.html


### react18

```javascript
import { startTransition } from "react";
import  {  useTransition  }  from  'react' ; 
const  [ isPending ,  startTransition ]  =  useTransition ( ) ;
const  [ isPending ,  startTransition ]  =  useTransition () ; 

ReactDOM.createRoot() ;   
import { flushSync } from 'react-dom'
flushSync(() => {
    setCounter(c => c + 1);
});
```