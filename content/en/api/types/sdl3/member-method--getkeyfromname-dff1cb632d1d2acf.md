---
title: "SDLContext.RawApi — Method: GetKeyFromName"
description: "Exact Method: GetKeyFromName contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.dff1cb632d1d2acf
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetKeyFromName

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetKeyFromName`

<a id="api-b086200f0affe43c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetKeyFromName(System.SByte*) 5b95e59c3a5dc48dfda179c809c8341522646e0993dcff117a489524e2d9d5b8 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetKeyFromName(sbyte* name)
```

Get a key code from a human-readable name.

**Thread safety:** This function is not thread safe.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetKeyFromScancode

**See also:** SDL_GetKeyName

**See also:** SDL_GetScancodeFromName

**Parameter `name`:** the human-readable key name.

**Returns:** key code, or `SDLK_UNKNOWN` if the name wasn't recognized; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26513).
