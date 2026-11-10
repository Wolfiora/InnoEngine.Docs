---
title: "SDLContext.RawApi — Method: CreateProperties"
description: "Exact Method: CreateProperties contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8916cb892efe0aab
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateProperties

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateProperties`

<a id="api-3728debc870b82eb"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateProperties ff9d5ffa1bb2324ccf9c3f83fddf948655b511aacec78d49b8860dc15914b09f -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.CreateProperties()
```

Create a group of properties.
All properties are automatically destroyed when SDL_Quit() is called.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_DestroyProperties

**Returns:** an ID for a new group of properties, or 0 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42225).
