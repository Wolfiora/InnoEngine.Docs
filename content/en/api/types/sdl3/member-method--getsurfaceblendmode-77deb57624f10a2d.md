---
title: "SDLContext.RawApi — Method: GetSurfaceBlendMode"
description: "Exact Method: GetSurfaceBlendMode contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.77deb57624f10a2d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetSurfaceBlendMode

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSurfaceBlendMode`

<a id="api-a62561de12c3a18f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetSurfaceBlendMode(Inno.Native.Sdl3.SDLSurface*,System.UInt32*) 741dfb98659731414ea70f631905406a12c18e2e117b971edf04d5b468dd0863 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetSurfaceBlendMode(Inno.Native.Sdl3.SDLSurface* surface, uint* blendMode)
```

Get the blend mode used for blit operations.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetSurfaceBlendMode

**Parameter `surface`:** the SDL_Surface structure to query.

**Parameter `blendMode`:** a pointer filled in with the current SDL_BlendMode.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24068).
