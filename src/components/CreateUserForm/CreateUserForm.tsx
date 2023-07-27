import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ActionButton } from '@/components/ActionButton';

import { CreateUserSchema, createUserSchema } from './createUserSchema';

export type CreateUserFormProps = {
  onSubmit: SubmitHandler<CreateUserSchema>;
  onLogout: () => void;
};

export const CreateUserForm = ({ onSubmit, onLogout }: CreateUserFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserSchema>({
    defaultValues: {
      name: '',
    },
    resolver: zodResolver(createUserSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <label htmlFor="name" className="px-4 font-bold">
          ニックネーム
        </label>
        <input
          {...register('name')}
          placeholder="ニックネームを入力してください"
          className="line-height-1 border-y border-mauve-7 px-4 py-3 placeholder-mauve-7"
        />
        {errors.name && (
          <span className="mt-1 px-4 text-sm text-red-11">{errors.name.message}</span>
        )}
      </div>
      <div className="mt-8 flex gap-4 px-4">
        <ActionButton type="submit" className="flex-1">
          登録する
        </ActionButton>
        <ActionButton type="button" className="flex-1" theme="outline" onClick={onLogout}>
          ログアウト
        </ActionButton>
      </div>
    </form>
  );
};
