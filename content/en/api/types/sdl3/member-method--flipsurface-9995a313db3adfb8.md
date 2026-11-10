---
title: "SDLContext.RawApi — Method: FlipSurface"
description: "Exact Method: FlipSurface contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9995a313db3adfb8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: FlipSurface

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `FlipSurface`

<a id="api-7b452aaa938098df"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.FlipSurface(Inno.Native.Sdl3.SDLSurface*,Inno.Native.Sdl3.SDLFlipMode) 7ce1e2c91acce9d0fd6448d5495e7b8a480ec44247e5bcf91bc2dc3d7dceee3e -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.FlipSurface(Inno.Native.Sdl3.SDLSurface* surface, Inno.Native.Sdl3.SDLFlipMode flip)
```

Flip a surface vertically or horizontally.

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `surface`:** the surface to flip.

**Parameter `flip`:** the direction to flip.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45353).
