---
title: "SDLContext.RawApi — Method: SavePng"
description: "Exact Method: SavePng contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.09a77761084fc647
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SavePng

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SavePng`

<a id="api-858475d076df22dd"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SavePng(Inno.Native.Sdl3.SDLSurface*,System.SByte*) be7a5cb2de80668fe1b96cbb26a6efc3c1a3f4edb22745ca24b334d1ee2f3fdb -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SavePng(Inno.Native.Sdl3.SDLSurface* surface, sbyte* file)
```

Save a surface to a file in PNG format.

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.4.0.

**See also:** SDL_LoadPNG

**See also:** SDL_SavePNG_IO

**Parameter `surface`:** the SDL_Surface structure containing the image to be saved.

**Parameter `file`:** a file to save to.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32099).
