import React from 'react';
import { MainContext, useContext } from '../utils/context';
import Modal1 from './Modal1';
import Modal2 from './Modal2';
import Modal3 from './Modal3';

function ModalSelector(): JSX.Element {
  const { selectedCard } = useContext(MainContext);

  const card = {
    1: Modal1,
    2: Modal2,
    3: Modal3,
  };

  const selectedCardNumber = selectedCard as keyof typeof card;

  const Modal = card[selectedCardNumber];

  return (
    <div className={` h-3/4 w-auto rounded-[30px]`}>
      <Modal />
    </div>
  );
}

export default ModalSelector;
