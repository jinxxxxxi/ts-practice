type HandleObject<Obj extends object> = {
  [Key in keyof Obj]: `${Key}, ${Obj[Key]}`
}

type HandleObjectRes = HandleObject<{
  zhangjing: 1
  zj: 2
}>

type UppercaseKey<Obj extends object> = {
  [Key in keyof Obj as Uppercase<Key & string>]: Obj[Key]
}

type UppercaseKeyRes = UppercaseKey<{ a: 1; bb: 2 }>

//  约束对象
type RecordUppercaseKey<Obj extends Record<string, any>> = {
  [Key in keyof Obj as Uppercase<Key & string>]: Obj[Key]
}

// 转为只读
type ToReadOnly<T> = {
  readonly [K in keyof T]: T[K]
}

type ToReadOnlyRes = ToReadOnly<{ a: 1; b: 2 }>
