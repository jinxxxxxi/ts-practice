type StringToUnion<Str extends String> =
  Str extends `${infer First}${infer Rest}`
    ? First | StringToUnion<Rest>
    : never

type StringToUnionRes = StringToUnion<'123'>

type ReverseStr<Str extends String> = Str extends `${infer First}${infer Rest}`
  ? `${ReverseStr<Rest>}${First}`
  : Str

type ReverseStrRes = ReverseStr<'123'>
