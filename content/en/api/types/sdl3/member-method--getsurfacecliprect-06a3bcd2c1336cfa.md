---
title: "SDLContext.RawApi — Method: GetSurfaceClipRect"
description: "Exact Method: GetSurfaceClipRect contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.06a3bcd2c1336cfa
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetSurfaceClipRect

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSurfaceClipRect`

<a id="api-d03b48c4176bf308"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetSurfaceClipRect(Inno.Native.Sdl3.SDLSurface*,Inno.Native.Sdl3.SDLRect*) c377e5edfd9f6be2a59fc61f0e83726662dc70069421214aeca099c447118706 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetSurfaceClipRect(Inno.Native.Sdl3.SDLSurface* surface, Inno.Native.Sdl3.SDLRect* rect)
```

Get the clipping rectangle for a surface.
When `surface` is the destination of a blit, only the area within the clip
rectangle is drawn into.

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetSurfaceClipRect

**Parameter `surface`:** the SDL_Surface structure representing the surface to be
clipped.

**Parameter `rect`:** an SDL_Rect structure filled in with the clipping rectangle for
the surface.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29760).
