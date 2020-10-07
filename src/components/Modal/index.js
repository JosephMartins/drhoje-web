import React  from 'react';

const Modal = ({modal, setModal}) => {
  if(modal){
  return (
    <div>
      <h1>Hello Modal</h1>
      <button onClick={() => setModal(false)}>fechar modal</button>
    </div>
  )
}

  return null;

}

export default Modal;
