import { useContext } from 'react';
import { MainContext } from '../utils/context';

export function scaleSize() {
  const { size } = useContext(MainContext);

  if (size === 1) {
    return 'scale-75';
  }
  if (size === 2) {
    return 'scale-100';
  }
  if (size === 3) {
    return 'scale-125';
  }
}

export function colorPicker(type: string) {
  const { color } = useContext(MainContext);

  if (color === 'bg-black') {
    return type == 'bg'
      ? 'bg-black text-white hover:bg-gray-800'
      : 'text-black hover:text-gray-800';
  }
  if (color === 'bg-white') {
    return type == 'bg'
      ? 'bg-white text-black hover:bg-gray-200'
      : 'text-white hover:text-gray-200';
  }
  if (color === 'bg-violet-600') {
    return type == 'bg'
      ? 'bg-violet-600 text-white hover:bg-violet-700'
      : 'text-violet-600 hover:text-violet-700';
  }
  if (color === 'bg-orange-400') {
    return type == 'bg'
      ? 'bg-orange-400 text-white hover:bg-orange-500'
      : 'text-orange-400 hover:text-orange-500';
  }
  if (color === 'bg-neutral-500') {
    return type == 'bg'
      ? 'bg-neutral-500 text-white hover:bg-neutral-600'
      : 'text-neutral-500 hover:text-neutral-600';
  }
  if (color === 'bg-gray-300') {
    return type == 'bg'
      ? 'bg-gray-300 text-black hover:bg-gray-400'
      : 'text-gray-300 hover:text-gray-400';
  }
}

export function positionSelector() {
  const { position } = useContext(MainContext);

  if (position === 1 || position === 2 || position === 3) {
    let pos =
      position === 1
        ? 'items-start justify-start'
        : position === 2
        ? 'items-start justify-center'
        : 'items-start justify-end';
    return pos;
  }
  if (position === 4 || position === 5 || position === 6) {
    let pos =
      position === 4
        ? 'items-center justify-start'
        : position === 5
        ? 'items-center justify-center'
        : 'items-center justify-end';
    return pos;
  }
  if (position === 7 || position === 8 || position === 9) {
    let pos =
      position === 7
        ? 'items-end justify-start'
        : position === 8
        ? 'items-end justify-center'
        : 'items-end justify-end';
    return pos;
  }
}

export default scaleSize;
