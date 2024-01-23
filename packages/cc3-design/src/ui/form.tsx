import React from 'react';
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
} from 'react-hook-form';

import { Slot } from '@radix-ui/react-slot';

import { FieldContext, ItemContext } from '@cc3/design/context/form';
import { useFormField } from '@cc3/design/hook/use-form-field';
import { cn } from '@cc3/design/lib/utils';
import { Label as LabelPrimitive } from '@cc3/design/ui/label';

export const Provider = FormProvider;

export const Field = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FieldContext.Provider>
  );
};

export const Item = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <ItemContext.Provider value={{ id }}>
      <div {...props} ref={ref} className={cn('space-y-2', className)} />
    </ItemContext.Provider>
  );
});

Item.displayName = 'FormItem';

export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <LabelPrimitive
      {...props}
      ref={ref}
      className={cn(error && 'text-destructive', className)}
      htmlFor={formItemId}
    />
  );
});

Label.displayName = 'FormLabel';

export const Control = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      {...props}
      ref={ref}
      id={formItemId}
      aria-invalid={!!error}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
    />
  );
});

Control.displayName = 'FormControl';

export const Description = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      {...props}
      ref={ref}
      id={formDescriptionId}
      className={cn('text-muted-foreground text-[0.8rem]', className)}
    />
  );
});

Description.displayName = 'FormDescription';

export const Message = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      {...props}
      ref={ref}
      id={formMessageId}
      className={cn('text-destructive text-[0.8rem] font-medium', className)}
    >
      {body}
    </p>
  );
});

Message.displayName = 'FormMessage';
