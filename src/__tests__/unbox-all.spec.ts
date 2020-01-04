import { unboxAll } from "../unbox-all"

describe("UnboxAll handles promises", () => {
  let stringPromise: Promise<string>
  let stringPromises: Array<Promise<string>>

  let failedPromise: Promise<string>
  let failedPromises: Array<Promise<string>>
  let mixedPromises: Array<Promise<string>>

  beforeAll (() => {
    stringPromise = Promise.resolve("good")
    failedPromise = Promise.reject("failed")
    stringPromises = [ stringPromise, stringPromise ]
    failedPromises = [ failedPromise, failedPromise ]
    mixedPromises = [ stringPromise, failedPromise, failedPromise, stringPromise ]
  })

  it("unboxAll should return data and error properties with good promises", async() => {
    const result = await unboxAll(stringPromises)
    expect(result).toHaveProperty("data")
    expect(result).toHaveProperty("error")
  })

  it("unboxAll should return data and error properties with bad promises", async () => {
    const result = await unboxAll(failedPromises)
    expect(result).toHaveProperty("data")
    expect(result).toHaveProperty("error")
  })

  it("unboxAll should return string[] with string type for each promise", async() => {
    const result = await unboxAll(stringPromises)
    const expectedResult = [ "good", "good" ]
    expect(result.data).toBeDefined()
    expect(result.error).toBeUndefined()
    expect(result.data).toEqual(expectedResult)
  })

  it("unboxAll should return void array if input is an void array", async () => {
    const result = await unboxAll([])
    const expectedResult = [] as Array<void>
    expect(result.error).toBeUndefined()
    expect(result.data).toBeDefined()
    expect(result.data).toEqual(expectedResult)
  })

  it("unboxAll should return error with bad for each promise", async () => {
    const result = await unboxAll(failedPromises)
    const expectedResult = [ "failed", "failed" ]
    expect(result.data).toBeUndefined()
    expect(result.error).toBeDefined()
    expect(result.error).toEqual(expectedResult)
  })

  it("unboxAll should return only error when some promise failed and other pass", async () => {
    const result = await unboxAll(mixedPromises)
    const expectedResult = [ "failed", "failed" ]
    expect(result.data).toBeUndefined()
    expect(result.error).toBeDefined()
    expect(result.error).toEqual(expectedResult)
  })

})
