type QueryHookReturn<T> = {
  isLoading: boolean;
  isError: boolean;
} & { [key in keyof T]?: T[key] };

export type QueryHook<I, T> = (input: I) => QueryHookReturn<T>;
export type MutateOptions<T> = {
  onSuccess?: (data: T) => void;
  onError?: (err: Error) => void;
};
