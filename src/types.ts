export interface UnboxData<TResult> {
    data: TResult
    error: undefined
}

export interface UnboxErrorObject<TError> {
    data: undefined
    error: TError
}

export type UnboxObject<TResult, TError = Error | Error[]> = UnboxData<TResult> | UnboxErrorObject<TError>

export type CallbackOnError<TParams> = (params: TParams) => void
