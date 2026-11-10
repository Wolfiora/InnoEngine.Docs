---
title: "SDLContext.RawApi — Method: Wcscmp"
description: "Exact Method: Wcscmp contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.428bb4cd982f82be
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Wcscmp

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Wcscmp`

<a id="api-bef328a8934ea588"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Wcscmp(System.UInt16*,System.UInt16*) 27249249160a0b10b0e23b8dc75154ff0b0d8924e98b4b7b945269c9cc5ca317 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Wcscmp(ushort* str1, ushort* str2)
```

Compare two null-terminated wide strings.
This only compares wchar_t values until it hits a null-terminating
character; it does not care if the string is well-formed UTF-16 (or UTF-32,
depending on your platform's wchar_t size), or uses valid Unicode values.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `str1`:** the first string to compare. NULL is not permitted!

**Parameter `str2`:** the second string to compare. NULL is not permitted!

**Returns:** less than zero if str1 is "less than" str2, greater than zero if
str1 is "greater than" str2, and zero if the strings match
exactly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31947).
