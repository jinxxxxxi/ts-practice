// 当类型参数为联合类型，并且在条件类型左边直接引用该类型参数的时候，
// TypeScript 会把每一个元素单独传入来做类型运算，最后再合并成联合类型，这种语法叫做分布式条件类型。

type UppercaseChar<Item extends string | number> =
    Item extends string ? Uppercase<Item> : Item
type UppercaseCharRes = UppercaseChar<'a' | 2 | 'b'>



// ----------------------------------------------------------------
// A extends A 这种写法是为了触发分布式条件类型，让每个类型单独传入处理的，没别的意义。
// A extends A 和 [A] extends [A] 是不同的处理，前者是单个类型和整个类型做判断，后者两边都是整个联合类型，因为只有 extends 左边直接是类型参数才会触发分布式条件类型。
type isUnion<A, B = A> =
    A extends A ? [B] extends [A] ? false : true : never
type isUnionRes = isUnion<'a' | 'b'>

// ------------------------------
// 数组转联合类型
type ArrayToUnion<Arr extends unknown[]> = Arr[number]
type ArrayToUnionRes = ArrayToUnion<[1, 2]>

// ------------------------------
// BEM
type BEM<
    Block extends string,
    Element extends string[],
    Modifiers extends string[]
    > = `${Block}__${Element[number]}--${Modifiers[number]}`
type BemRes = BEM<'zhang', ['aaa', 'bbb'], ['warning', 'succcess']>