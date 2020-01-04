================================
```
 _   _ _ __ | |__   _____  __
| | | | '_ \| '_ \ / _ \ \/ /
| |_| | | | | |_) | (_) >  <
 \__,_|_| |_|_.__/ \___/_/\_\

```
================================

#### What is and why ?

This is a simple function that will force the user to **handle the case of reject promise**.

Use for all promise, in most of the case we are not handling this case, and with `unbox` we will have less error and bugs.

#### Examples

```ts
const simple = async (promise: Promise<string>) => {
    const result = await unbox(promise)
    if (result.error) {
        throw result.error
    }
    const { data: str } = result
    return str
}

const multiple = async (promises: Array<Promise<string>>): Promise<string[]> => {
    const result = await unboxAll(promises)
    if (result.error) {
        throw result.error
    }
    const { data: strs } = result
    return strs
}
```

Don't forget to destructure result for typage.
