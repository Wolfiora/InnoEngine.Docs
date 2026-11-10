---
title: "SDLContext.RawApi — Method: QsortR"
description: "Exact Method: QsortR contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.afaaa7855d47b05d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: QsortR

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `QsortR`

<a id="api-9da9d4edcca73ec6"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.QsortR(System.Void*,System.UInt64,System.UInt64,,System.Void*) b8abb9afdbcf38bc3f5cba1d420ff5029c41ce506c97c06cf1868f89a3f95df7 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.QsortR(void* @base, ulong nmemb, ulong size, delegate* unmanaged[Cdecl]<void*, void*, void*, int> compare, void* userdata)
```

Sort an array, passing a userdata pointer to the compare function.
For example:
```c
typedef enum {
sort_increasing,
sort_decreasing,
} sort_method;
typedef struct {
int key;
const char *string;
} data;
int SDLCALL compare(const void *userdata, const void *a, const void *b)
{
sort_method method = (sort_method)(uintptr_t)userdata;
const data *A = (const data *)a;
const data *B = (const data *)b;
if (A->key
<
B->key) {
return (method == sort_increasing) ? -1 : 1;
} else if (B->key
<
A->key) {
return (method == sort_increasing) ? 1 : -1;
} else {
return 0;
}
}
data values[] = {
{ 3, "third" }, { 1, "first" }, { 2, "second" }
};
SDL_qsort_r(values, SDL_arraysize(values), sizeof(values[0]), compare, (const void *)(uintptr_t)sort_increasing);
```

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_bsearch_r

**See also:** SDL_qsort

**Parameter `base`:** a pointer to the start of the array.

**Parameter `nmemb`:** the number of elements in the array.

**Parameter `size`:** the size of the elements in the array.

**Parameter `compare`:** a function used to compare elements in the array.

**Parameter `userdata`:** a pointer to pass to the compare function.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37665).
