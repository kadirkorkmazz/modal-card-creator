import { useContext } from 'react';
import { MainContext } from '../utils/context';

export function scaleSize() {
  const { size } = useContext(MainContext);

  if (size === 1) {
    return 'scale-[0.7]';
  }
  if (size === 2) {
    return 'scale-[0.85]';
  }
  if (size === 3) {
    return 'scale-100';
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
  switch (position) {
    case 1:
      return 'items-start justify-start';
    case 2:
      return 'items-start justify-center';
    case 3:
      return 'items-start justify-end';
    case 4:
      return 'items-center justify-start';
    case 5:
      return 'items-center justify-center';
    case 6:
      return 'items-center justify-end';
    case 7:
      return 'items-end justify-start';
    case 8:
      return 'items-end justify-center';
    case 9:
      return 'items-end justify-end';
    default:
      return 'items-center justify-center';
  }
}

export function originSelector() {
  const { position } = useContext(MainContext);
  switch (position) {
    case 1:
      return 'origin-top-left';
    case 2:
      return 'origin-top';
    case 3:
      return 'origin-top-right';
    case 4:
      return 'origin-left';
    case 5:
      return 'origin-center';
    case 6:
      return 'origin-right';
    case 7:
      return 'origin-bottom-left';
    case 8:
      return 'origin-bottom';
    case 9:
      return 'origin-bottom-right';
    default:
      return 'origin-center';
  }
}

export function colorPickerVanilla(type: string) {
  const { color } = useContext(MainContext);

  if (color === 'bg-black') {
    return type == 'bg'
      ? ' backgroundColor:black; color:white;' //hover:bg-gray-800
      : 'color:black;'; // hover:text-gray-800'
  }
  if (color === 'bg-white') {
    return type == 'bg'
      ? 'backgroundColor:white; color:black;' //hover:bg-gray-200 //
      : 'color:white;'; // hover:text-gray-200
  }
  if (color === 'bg-violet-600') {
    return type == 'bg'
      ? 'backgroundColor:#7D4AEA; color:white;' //hover:bg-violet-700
      : 'color:#7D4AEA; '; //hover:text-violet-700
  }
  if (color === 'bg-orange-400') {
    return type == 'bg'
      ? 'backgroundColor:#F37C34; color:white;' // hover:bg-orange-500 'backgroundColor:white; color:black;'
      : 'color:#F37C34; '; //hover:text-orange-500
  }
  if (color === 'bg-neutral-500') {
    return type == 'bg'
      ? 'backgroundColor:#777777; color:white;' // hover:bg-neutral-600
      : 'color:#777777; '; //hover:text-neutral-600
  }
  if (color === 'bg-gray-300') {
    return type == 'bg'
      ? 'backgroundColor:#DDDDDD; color:black; ' //hover:bg-gray-400
      : 'color:#DDDDDD;'; // hover:text-gray-400
  }
}

export default scaleSize;
