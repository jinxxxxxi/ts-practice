type ReverseArr<Arr extends unknown[]> = Arr extends [...infer rest, infer last]
  ? [last, ...ReverseArr<rest>]
  : Arr

type ReverseArrRes = ReverseArr<[1, 2, 3, 4, 5]>

//------------------------------
// 查找数组中的某个元素
type SearchArrTarget<Arr extends unknown[], Target> = Arr extends [
  infer First,
  ...infer Rest
]
  ? isEqual<First, Target> extends true
    ? true
    : SearchArrTarget<Rest, Target>
  : false

type isEqual<A, B> = (A extends B ? true : false) & (B extends A ? true : false)
type SearchArrTargetRes = SearchArrTarget<[1, 2, 3], 4>

//------------------------------
// 删除数组中的某个元素
type RemoveArrItem<
  Arr extends unknown[],
  Target,
  Results extends unknown[] = []
> = Arr extends [infer First, ...infer Rest]
  ? isEqual<First, Target> extends true
    ? RemoveArrItem<Rest, Target, Results>
    : RemoveArrItem<Rest, Target, [...Results, First]>
  : Results

type RemoveArrItemRes = RemoveArrItem<[1, 2, 3], 2>
