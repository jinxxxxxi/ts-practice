//------------------------------
//any 类型与任何类型的交叉都是 any，也就是 1 & any 结果是 any。
type isAny<T> = '' extends ('aa' & T) ? true : false;
type isAnyRes = isAny<any>


//------------------------------
type isNever<T> = [T] extends [never] ? true : false;
type isNeverRes = isNever<never>