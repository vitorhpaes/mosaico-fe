export type RequireAll<TOptional, TRequired> =
    | (TOptional & TRequired)
    | (Partial<Record<keyof TOptional, never>> & TRequired)

export type WithLoading<TOptional> = RequireAll<TOptional, { loading?: boolean }>
