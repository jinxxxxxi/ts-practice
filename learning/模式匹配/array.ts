// 匹配数组的第一个元素
type GetFirst<Arr extends unknown[]> = Arr extends [infer first, ...unknown[]]
  ? first
  : never

type first = GetFirst<[1, 2, 3]>

// 匹配数组的最后一个元素
type GetLast<Arr extends unknown[]> = Arr extends [...unknown[], infer last]
  ? last
  : never

type last = GetLast<[1, 2, 3]>

// 匹配数组除最后一个元素以外的元素
type GetItemExcludeLast<Arr extends unknown[]> = Arr extends [
  ...infer rest,
  unknown
]
  ? rest
  : never

type rest = GetItemExcludeLast<[1, 2, 3]>
