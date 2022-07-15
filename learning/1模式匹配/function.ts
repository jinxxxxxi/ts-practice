let sum = (a: string, b: number) => {
  return a + b
}
//----------------------------------------------------------------
// 函数提取参数类型
type getFuncParamsType<func extends Function> = func extends (
  ...args: infer Arg
) => unknown
  ? Arg
  : never

type funcRes = getFuncParamsType<typeof sum>

//----------------------------------------------------------------
// 函数提取返回值类型
// NOTE: 这里不能用 unknown，因为参数类型是要赋值给别的类型的，而 unknown 只能用来接收类型，所以用 any
type getFuncReturnType<func extends Function> = func extends (
  ...args: any[]
) => infer returnType
  ? returnType
  : never

type rfuncReturnRes = getFuncReturnType<typeof sum>
