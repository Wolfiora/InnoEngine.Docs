---
title: "SDLContext.RawApi — Method: BsearchR"
description: "Exact Method: BsearchR contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9c03ee78b7d3c5c3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: BsearchR

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BsearchR`

<a id="api-8918a1e7a281046d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.BsearchR(System.Void*,System.Void*,System.UInt64,System.UInt64,,System.Void*) efef6307e7e6c74adfb4c2ad3234804b87c989423c8aba06cecf716a289bb0d0 -->

```csharp
public void* Inno.Native.Sdl3.SDLContext.RawApi.BsearchR(void* key, void* @base, ulong nmemb, ulong size, delegate* unmanaged[Cdecl]<void*, void*, void*, int> compare, void* userdata)
```

Perform a binary search on a previously sorted array, passing a userdata
pointer to the compare function.
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
{ 1, "first" }, { 2, "second" }, { 3, "third" }
};
data key = { 2, NULL };
data *result = SDL_bsearch_r(
&key
, values, SDL_arraysize(values), sizeof(values[0]), compare, (const void *)(uintptr_t)sort_increasing);
```

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_bsearch

**See also:** SDL_qsort_r

**Parameter `key`:** a pointer to a key equal to the element being searched for.

**Parameter `base`:** a pointer to the start of the array.

**Parameter `nmemb`:** the number of elements in the array.

**Parameter `size`:** the size of the elements in the array.

**Parameter `compare`:** a function used to compare elements in the array.

**Parameter `userdata`:** a pointer to pass to the compare function.

**Returns:** a pointer to the matching element in the array, or NULL if not
found.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40694).
