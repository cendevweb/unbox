import { CallbackOnError } from "./types"
import { unbox } from "./unbox"

export const unboxCallBackError = async <TResult, TParams>(
    promise: Promise<TResult>,
    callbackOnError: CallbackOnError<TParams>,
    params: TParams,
): Promise<TResult> => {
    const unboxResult = await unbox(promise)
    if (unboxResult.error) {
        callbackOnError(params)
        throw (unboxResult.error)
    }
    const { data } = unboxResult
    return data
}
