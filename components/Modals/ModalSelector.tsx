import React, { Suspense } from 'react';
import { MainContext, useContext } from '../utils/context';

function loadComponent(id: number) {
  const Component = React.lazy(() => import(`./Modal${id}.tsx`));
  return Component;
}

function ModalSelector() {
  const { selectedCard } = useContext(MainContext);
  const Modal = loadComponent(selectedCard);

  return (
    <div className={`w-[480px] h-[446px] rounded-[30px]`}>
      <Suspense fallback={<div>Loading...</div>}>
        <Modal />
      </Suspense>
    </div>
  );
}

export default ModalSelector;
