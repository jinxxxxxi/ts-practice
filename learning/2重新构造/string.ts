type UpperFirstChar<Str extends string> =
  Str extends `${infer FirstChar}${infer rest}`
    ? `${Uppercase<FirstChar>}${rest}`
    : Str

type UpperFirstCharRes = UpperFirstChar<'zhangjing'>

// ------------------------------
//删除字符串中的某个子串
type DelSubStr<
  Str extends string,
  SubStr extends string
> = Str extends `${infer Start}${SubStr}${infer End}`
  ? DelSubStr<`${Start}${End}`, SubStr>
  : Str

type DelSubStrRes = DelSubStr<"I'm zj aaaaa ", 'a'>
