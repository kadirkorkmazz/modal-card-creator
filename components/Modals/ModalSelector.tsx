import React from 'react';
import { MainContext, useContext } from '../utils/context';
import Modal1 from './Modal1';
import Modal2 from './Modal2';
import Modal3 from './Modal3';

function ModalSelector() {
  const { selectedCard } = useContext(MainContext);

  const card = {
    1: Modal1,
    2: Modal2,
    3: Modal3,
  };

  let selectedCardNumber = selectedCard as keyof typeof card;

  const Modal = card[selectedCardNumber];

  return (
    <div className={`w-[480px] h-[446px] rounded-[30px]`}>
      <Modal />
    </div>
  );
}

export default ModalSelector;
