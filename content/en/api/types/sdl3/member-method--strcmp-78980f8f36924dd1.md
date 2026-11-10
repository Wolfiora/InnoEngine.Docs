---
title: "SDLContext.RawApi — Method: Strcmp"
description: "Exact Method: Strcmp contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.78980f8f36924dd1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Strcmp

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Strcmp`

<a id="api-596c53604c0b2f94"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Strcmp(System.SByte*,System.SByte*) cc9f3043e5f1fde49811f0d17d3542c384186094cabd2885520deea3d9f31c9f -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Strcmp(sbyte* str1, sbyte* str2)
```

Compare two null-terminated UTF-8 strings.
Due to the nature of UTF-8 encoding, this will work with Unicode strings,
since effectively this function just compares bytes until it hits a
null-terminating character. Also due to the nature of UTF-8, this can be
used with SDL_qsort() to put strings in (roughly) alphabetical order.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `str1`:** the first string to compare. NULL is not permitted!

**Parameter `str2`:** the second string to compare. NULL is not permitted!

**Returns:** less than zero if str1 is "less than" str2, greater than zero if
str1 is "greater than" str2, and zero if the strings match
exactly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37988).
