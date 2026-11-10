---
title: "SDLContext.RawApi — Method: Bsearch"
description: "Exact Method: Bsearch contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.28ca85e0d9dee1bd
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Bsearch

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Bsearch`

<a id="api-a361110e8532c384"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Bsearch(System.Void*,System.Void*,System.UInt64,System.UInt64,) ddf85d128b0508bfc0d0bb7466369c67c19bdc49b0a1397cb068d6aaf7d4995c -->

```csharp
public void* Inno.Native.Sdl3.SDLContext.RawApi.Bsearch(void* key, void* @base, ulong nmemb, ulong size, delegate* unmanaged[Cdecl]<void*, void*, int> compare)
```

Perform a binary search on a previously sorted array.
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
{ 1, "first" }, { 2, "second" }, { 3, "third" }
};
data key = { 2, NULL };
data *result = SDL_bsearch(
&key
, values, SDL_arraysize(values), sizeof(values[0]), compare);
```

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_bsearch_r

**See also:** SDL_qsort

**Parameter `key`:** a pointer to a key equal to the element being searched for.

**Parameter `base`:** a pointer to the start of the array.

**Parameter `nmemb`:** the number of elements in the array.

**Parameter `size`:** the size of the elements in the array.

**Parameter `compare`:** a function used to compare elements in the array.

**Returns:** a pointer to the matching element in the array, or NULL if not
found.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25816).
