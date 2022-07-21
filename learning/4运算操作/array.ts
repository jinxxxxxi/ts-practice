// 根据长度构建数组
type BuildArray<Length extends Number, Ele=unknown, Arr extends unknown[] = []> = 
    Arr['length'] extends Length ? Arr : BuildArray<Length, Ele, [...Arr, Ele]>
    

type BuildArrayRes = BuildArray<3>

//------------------------------
// 加法
type AddNum<Num1 extends number, Num2 extends number> = [...BuildArray<Num1>, ...BuildArray<Num2>]['length']
type AddNumRes = AddNum<9, 7>


//------------------------------
// 减法
type SubNum<Num1 extends number, Num2 extends number> = BuildArray<Num1> extends [...BuildArray<Num2>, ...infer Rest] ? Rest['length'] : never
type SubNumRes = SubNum<9, 7>


//------------------------------
// 乘法
type Multiply<Num1 extends number, Num2 extends number, Results extends unknown[] = []> = 
    Num2 extends 0 ? Results['length'] : Multiply<Num1, SubNum<Num2, 1>, [...BuildArray<Num1>, ...Results]> 
    

type MultiplyRes = Multiply<0,2>


//------------------------------
// 除法
type Divide<Num1 extends number, Num2 extends number, Results extends unknown[] = []> = 
    Num1 extends 0 ? Results['length'] : Divide<SubNum<Num1, Num2>, Num2, [unknown, ...Results]>
    
type DivideRes = Divide<10, 2>


