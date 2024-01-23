import { createContext } from 'react';
import { FieldPath, FieldValues } from 'react-hook-form';

export type FieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

export type ItemContextValue = {
  id: string;
};

export const ItemContext = createContext<ItemContextValue>(
  {} as ItemContextValue,
);

export const FieldContext = createContext<FieldContextValue>(
  {} as FieldContextValue,
);
