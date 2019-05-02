import React,{useState} from 'react'

const updateComponent = (originalComponent, incrementNumber) => {
    function newComponent (){
        const [counter, setCounter] = useState(0);

        return (
            <originalComponent />
        )

    }
    return newComponent;
}

export default updateComponent;