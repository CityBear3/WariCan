type QueryHookReturn<T> = {
  isLoading: boolean;
  isError: boolean;
} & { [key in keyof T]?: T[key] };

export type QueryHook<T> = () => QueryHookReturn<T>;
