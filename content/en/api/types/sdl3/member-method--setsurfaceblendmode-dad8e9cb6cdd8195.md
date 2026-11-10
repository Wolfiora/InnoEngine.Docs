---
title: "SDLContext.RawApi — Method: SetSurfaceBlendMode"
description: "Exact Method: SetSurfaceBlendMode contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.dad8e9cb6cdd8195
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetSurfaceBlendMode

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetSurfaceBlendMode`

<a id="api-d3e173276fccc0ea"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetSurfaceBlendMode(Inno.Native.Sdl3.SDLSurface*,System.UInt32) 47ef85bc67d3b49e12f076560ebe31e7f7b01c4f731b09a5339ad433fd6fe7f1 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetSurfaceBlendMode(Inno.Native.Sdl3.SDLSurface* surface, uint blendMode)
```

Set the blend mode used for blit operations.
To copy a surface to another surface (or texture) without blending with the
existing data, the blendmode of the SOURCE surface should be set to
`SDL_BLENDMODE_NONE`.

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetSurfaceBlendMode

**Parameter `surface`:** the SDL_Surface structure to update.

**Parameter `blendMode`:** the SDL_BlendMode to use for blit blending.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27584).
