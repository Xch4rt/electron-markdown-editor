import React, {useCallback, useState} from 'react'
import  Editor from './editor'
import Preview from './preview'
import './app.css'

const App: React.FC = () => {
    const [doc, setDoc] = useState<string>('# Hello World!\n')
    
    const handleChange = useCallback(newDoc => {
        setDoc(newDoc)
    }, [])
    return(
        <div className= 'app'>
           <Editor onChange={handleChange} initialDoc={doc}/>
           <Preview doc = {doc} />
        </div>
    )
}

export default App