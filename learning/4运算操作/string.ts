// 数组长度可以取 length 来得到，但是字符串类型不能取 length
// 实现一个求字符串长度的高级类型
type StrLen<Str extends string, Arr extends unknown[] = []> = 
    Str extends `${string}${infer Rest}` ? StrLen<Rest, [...Arr,unknown]> : Arr['length']
    

type StrLenRes = StrLen<'zhangjing'>