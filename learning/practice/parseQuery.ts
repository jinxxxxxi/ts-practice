type ParseUrlToString<Str extends string,Res extends unknown[]> =
    Str extends `${infer First}&${string}` ? [First, ...ParseUrlToString<string>] : never

type ParseUrlToStringRes = ParseUrlToString<'a=1&b=2'>