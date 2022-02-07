import {useState}from 'react';

const useModal =(initialValue=false)=>{
    const[isOpen,setisOpen]= useState(initialValue);

    const openModal=()=> {console.log('hola')
        return setisOpen(true)};

    const closeModal=()=> setisOpen(false);

return[isOpen, openModal, closeModal];
};
export default useModal;