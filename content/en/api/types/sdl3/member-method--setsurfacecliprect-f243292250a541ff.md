---
title: "SDLContext.RawApi — Method: SetSurfaceClipRect"
description: "Exact Method: SetSurfaceClipRect contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f243292250a541ff
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetSurfaceClipRect

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetSurfaceClipRect`

<a id="api-f91ed32cc6e627f6"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetSurfaceClipRect(Inno.Native.Sdl3.SDLSurface*,Inno.Native.Sdl3.SDLRect*) 08200d4b773276131771cd15473a9a4982380be53c5cb6dd3db9d0fb33e2206e -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetSurfaceClipRect(Inno.Native.Sdl3.SDLSurface* surface, Inno.Native.Sdl3.SDLRect* rect)
```

Set the clipping rectangle for a surface.
When `surface` is the destination of a blit, only the area within the clip
rectangle is drawn into.
Note that blits are automatically clipped to the edges of the source and
destination surfaces.

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetSurfaceClipRect

**Parameter `surface`:** the SDL_Surface structure to be clipped.

**Parameter `rect`:** the SDL_Rect structure representing the clipping rectangle, or
NULL to disable clipping.

**Returns:** true if the rectangle intersects the surface, otherwise false and
blits will be completely clipped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30942).
