// 数组长度可以取 length 来得到，但是字符串类型不能取 length
// 实现一个求字符串长度的高级类型
type StrLen<Str extends string, Arr extends unknown[] = []> = 
    Str extends `${string}${infer Rest}` ? StrLen<Rest, [...Arr,unknown]> : Arr['length']
    

type StrLenRes = StrLen<'222dsdsd'>


//------------------------------
// 两个数的比较
type GreateThan<Num1 extends number, Num2 extends number, Results extends unknown[] = []> =
    Num1 extends Num2 ? false : Results['length'] extends Num2 ? true : Results['length'] extends Num1 ? false : GreateThan<Num1, Num2, [...Results, unknown]>
type GreateThanRes = GreateThan<1,2>