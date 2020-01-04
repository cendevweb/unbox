import { unbox } from "./unbox"

export const unboxAll = async <T>(promises: Array<Promise<T>>) => {
    const data: T[] = []
    const errors: Error[] = []
    await Promise.all(promises.map(async (currentPromise) => {
        const result = await unbox(currentPromise)
        result.data && data.push(result.data)
        result.error && errors.push(result.error)
    }))
    const promise = !!errors.length ? Promise.reject(errors) : Promise.resolve(data)
    return unbox<T[], Error[]>(promise)
}
