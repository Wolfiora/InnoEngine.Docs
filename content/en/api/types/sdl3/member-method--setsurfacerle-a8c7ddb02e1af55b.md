---
title: "SDLContext.RawApi — Method: SetSurfaceRle"
description: "Exact Method: SetSurfaceRle contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a8c7ddb02e1af55b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetSurfaceRle

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetSurfaceRle`

<a id="api-6d6ae690a880169c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetSurfaceRle(Inno.Native.Sdl3.SDLSurface*,System.Byte) a672f11955bbc7b4ad04b1083111a8b288e5bf62ead1524cf88aa13a22ab23b8 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetSurfaceRle(Inno.Native.Sdl3.SDLSurface* surface, byte enabled)
```

Set the RLE acceleration hint for a surface.
If RLE is enabled, color key and alpha blending blits are much faster, but
the surface must be locked before directly accessing the pixels.

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_BlitSurface

**See also:** SDL_LockSurface

**See also:** SDL_UnlockSurface

**Parameter `surface`:** the SDL_Surface structure to optimize.

**Parameter `enabled`:** true to enable RLE acceleration, false to disable it.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17604).
