type pickTest = Pick<{ a: 1, b: 2 }, 'a' | 'b'>

type RecordRes = Record<'a' | 3, 32 | 1>