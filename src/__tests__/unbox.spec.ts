import { unbox } from "../unbox"

describe("Unbox handles promises", () => {
  let stringPromise: Promise<string>;
  let undefinedPromise: Promise<undefined>;
  let failedPromise: Promise<string>;

  beforeAll (() => {
    stringPromise = Promise.resolve("good")
    failedPromise = Promise.reject("failed")
    undefinedPromise = Promise.resolve(undefined)
  })

  it("unbox should return data and error properties with good promise", async() => {
    const result = await unbox(stringPromise)
    expect(result).toHaveProperty("data")
    expect(result).toHaveProperty("error")
  })

  it("unbox should return data and error properties with bad promise", async () => {
    const result = await unbox(failedPromise)
    expect(result).toHaveProperty("data")
    expect(result).toHaveProperty("error")
  })

  it("unbox should return string with string type promise", async() => {
    const result = await unbox(stringPromise)
    expect(result.error).toBeUndefined()
    expect(result.data).toBe("good")
  })

  it("unbox should return undefined with undefined type promise", async () => {
    const result = await unbox(undefinedPromise)
    expect(result.error).toBeUndefined()
    expect(result.data).toBeUndefined()
  })

  it("unbox should return error with bad promise", async () => {
    const result = await unbox(Promise.reject("failed"))
    expect(result.data).toBeUndefined()
    expect(result.error).toBe("failed")
  })

})
