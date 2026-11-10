---
title: "SDLContext.RawApi — Method: Atoi"
description: "Exact Method: Atoi contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.13feb23303a92f24
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Atoi

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Atoi`

<a id="api-a7be5b581d1d3773"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Atoi(System.SByte*) 1cccab530bfd72d5bbeadb334c9392373256f03fdda4c8e152c629a88b2ea5cc -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Atoi(sbyte* str)
```

Parse an `int` from a string.
The result of calling `SDL_atoi(str)` is equivalent to
`(int)SDL_strtol(str, NULL, 10)`.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_atof

**See also:** SDL_strtol

**See also:** SDL_strtoul

**See also:** SDL_strtoll

**See also:** SDL_strtoull

**See also:** SDL_strtod

**See also:** SDL_itoa

**Parameter `str`:** The null-terminated string to read. Must not be NULL.

**Returns:** the parsed `int`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42325).
