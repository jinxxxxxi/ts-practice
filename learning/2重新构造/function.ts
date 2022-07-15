type AddFuncParams<Func extends Function, Arg extends any> = Func extends (
  ...args: infer Args
) => infer ReturnType
  ? (...args: [...Args, Arg]) => ReturnType
  : never

type AddFuncParamsRes = AddFuncParams<(a: number, b: string) => string, boolean>
