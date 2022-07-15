type DeepGetPromise<P extends Promise<unknown>> = P extends Promise<
  infer ValueType
>
  ? ValueType extends Promise<unknown>
    ? DeepGetPromise<ValueType>
    : ValueType
  : never

type DeepGetPromiseRes = DeepGetPromise<Promise<Promise<Record<string, any>>>>
