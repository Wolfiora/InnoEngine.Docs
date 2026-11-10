---
title: "SDLContext.RawApi — Method: Atof"
description: "Exact Method: Atof contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ce700093e6a69a3e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Atof

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Atof`

<a id="api-ecd63d7dbfd7aa2a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Atof(System.SByte*) 3cd0cbf9471793bf2a5aa2aacec143331a25d5abcd33d8f75d114e957cfc8513 -->

```csharp
public double Inno.Native.Sdl3.SDLContext.RawApi.Atof(sbyte* str)
```

Parse a `double` from a string.
The result of calling `SDL_atof(str)` is equivalent to `SDL_strtod(str,
NULL)`.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_atoi

**See also:** SDL_strtol

**See also:** SDL_strtoul

**See also:** SDL_strtoll

**See also:** SDL_strtoull

**See also:** SDL_strtod

**Parameter `str`:** The null-terminated string to read. Must not be NULL.

**Returns:** the parsed `double`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L51139).
