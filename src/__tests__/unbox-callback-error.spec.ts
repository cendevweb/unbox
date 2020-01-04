import { unboxCallBackError } from "../unbox-callback-error"

describe("UnboxCallbackError handles promises", () => {
  let myParams: string
  let myCallback: (params: string) => void
  let stringPromise: Promise<string>
  let failedPromise: Promise<string>

  beforeAll (() => {
    stringPromise = Promise.resolve("good")
    failedPromise = Promise.reject("failed")
    myCallback = (params: string) => { params }
    myParams = "nothing"
  })

  it("UnboxCallbackError should return result of promise if not failed", async() => {
    const expectResult = "good"
    const result = await unboxCallBackError(stringPromise, myCallback, myParams)
    expect(result).toBe(expectResult)
  })

  it("UnboxCallbackError should throw error when promise reject", async () => {
      await expect(unboxCallBackError(failedPromise, myCallback, myParams)).rejects.toEqual("failed")
  })
})
