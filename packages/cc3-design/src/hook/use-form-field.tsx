import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';

import { FieldContext, ItemContext } from '@cc3/design/context/form';

export function useFormField() {
  const fieldContext = useContext(FieldContext);
  const itemContext = useContext(ItemContext);
  const { getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
}
