import { UnboxObject } from "./types"

export const unbox = async <TResult, TError extends Error | Error[] = Error>(
    promise: Promise<TResult>,
): Promise<UnboxObject<TResult, TError>> => {
    return promise.then(
        data => ({ data, error: undefined }),
        error => ({ error, data: undefined }),
    )
}
