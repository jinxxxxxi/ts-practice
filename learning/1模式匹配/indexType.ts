type GetRefProps<P> = 'ref' extends keyof P
  ? P extends { ref: infer refType | undefined }
    ? refType
    : never
  : never

type refRes = GetRefProps<{ name: string }>
