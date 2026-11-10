---
title: "SDLContext.RawApi — Method: Qsort"
description: "Exact Method: Qsort contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.be8fe85aba3518b0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Qsort

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Qsort`

<a id="api-210a6f72808d8656"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Qsort(System.Void*,System.UInt64,System.UInt64,) caf793c830073002dad7a8b1793b91b72e2a4e1a5e940e5e7049b697e0c55d50 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.Qsort(void* @base, ulong nmemb, ulong size, delegate* unmanaged[Cdecl]<void*, void*, int> compare)
```

Sort an array.
For example:
```c
typedef struct {
int key;
const char *string;
} data;
int SDLCALL compare(const void *a, const void *b)
{
const data *A = (const data *)a;
const data *B = (const data *)b;
if (A->n
<
B->n) {
return -1;
} else if (B->n
<
A->n) {
return 1;
} else {
return 0;
}
}
data values[] = {
{ 3, "third" }, { 1, "first" }, { 2, "second" }
};
SDL_qsort(values, SDL_arraysize(values), sizeof(values[0]), compare);
```

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_bsearch

**See also:** SDL_qsort_r

**Parameter `base`:** a pointer to the start of the array.

**Parameter `nmemb`:** the number of elements in the array.

**Parameter `size`:** the size of the elements in the array.

**Parameter `compare`:** a function used to compare elements in the array.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46332).
