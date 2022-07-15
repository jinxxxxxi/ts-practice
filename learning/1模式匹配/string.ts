// ----------------------------------------------------------------
// 判断字符串是否以${ prefix } 前缀开头
type strStartsWith<
  str extends string,
  prefix extends string
  // NOTE: ${string} 表示任意的string
> = str extends `${prefix}${string}` ? true : false

type strEndsWithaaa = strStartsWith<'aaasss', 'aaa'>
type strEndsWithbbb = strStartsWith<'aaasss', 'aaa'>

// ----------------------------------------------------------------
//提取字符串想要的部分，用这些再构成一个新的类型。
type ReplaceStr<
  Str extends string,
  From extends string,
  To extends string
  // NOTE: 用 Str 去匹配模式串，模式串由 From 和之前之后的字符串构成，把之前之后的字符串放到通过 infer 声明的局部变量 Prefix、Suffix 里
> = Str extends `${infer Prefix}${From}${infer Suffix}`
  ? `${Prefix}${To}${Suffix}`
  : Str

type res = ReplaceStr<'I am a apple', 'apple', 'pig'>
type resFault = ReplaceStr<'I am a apple', '1', 'pig'>

// ----------------------------------------------------------------
//实现去掉空白字符的 Trim
// 因为我们不知道有多少个空白字符，所以只能一个个匹配和去掉，需要**递归**

// 先处理右边
type trimStrRight<str extends string> = str extends `${infer rest}${
  | ' '
  | '\n'
  | '\t'}`
  ? trimStrRight<rest>
  : str
type trimStrLeft<str extends string> = str extends `${
  | ' '
  | '\n'
  | '\t'}${infer rest}`
  ? trimStrLeft<rest>
  : str

type trimRightRes = trimStrRight<"I'm zj     ">
type trimLeftRes = trimStrLeft<"   I'm zj">
type trimRes = trimStrLeft<trimStrRight<"   I'm zj     ">>
