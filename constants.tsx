
import React from 'react';
import { Heart, ThumbsUp, Check, XCircle } from 'lucide-react';
import { SelectionType } from './types';

export const SELECTION_CONFIG = {
  [SelectionType.LOVE]: {
    label: 'LOVE',
    subLabel: '超喜欢',
    color: 'bg-rose-500',
    textColor: 'text-rose-500',
    icon: <Heart size={16} />,
    weight: 1.5,
  },
  [SelectionType.LIKE]: {
    label: 'LIKE',
    subLabel: '喜欢',
    color: 'bg-indigo-500',
    textColor: 'text-indigo-500',
    icon: <ThumbsUp size={16} />,
    weight: 1.0,
  },
  [SelectionType.OKAY]: {
    label: 'OKAY',
    subLabel: '一般',
    color: 'bg-slate-400',
    textColor: 'text-slate-400',
    icon: <Check size={16} />,
    weight: 0.5,
  },
  [SelectionType.NOT_FOR_ME]: {
    label: 'NOT FOR ME',
    subLabel: '不适合我',
    color: 'bg-slate-800',
    textColor: 'text-slate-800',
    icon: <XCircle size={16} />,
    weight: -1.0,
  },
};
