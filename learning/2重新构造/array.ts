// 重新组合两个数组
type Combine<
  Arr1 extends [unknown, unknown],
  Arr2 extends [unknown, unknown]
> = Arr1 extends [infer Arr1Item1, infer Arr1Item2]
  ? Arr2 extends [infer Arr2Item1, infer Arr2Item2]
    ? [[Arr1Item1, Arr2Item2], [Arr1Item2, Arr2Item1]]
    : []
  : []
type combineRes = Combine<[1, 2], [3, 4]>
