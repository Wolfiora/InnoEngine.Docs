---
title: "SDLContext.RawApi — Method: ReleaseCameraFrame"
description: "Exact Method: ReleaseCameraFrame contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.190974cdc4351f99
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ReleaseCameraFrame

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ReleaseCameraFrame`

<a id="api-78982c7d1b792710"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ReleaseCameraFrame(Inno.Native.Sdl3.SDLCamera*,Inno.Native.Sdl3.SDLSurface*) b83a3af0676e63e3507b4a59139612565048534a36092c96d03761c8103ae987 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.ReleaseCameraFrame(Inno.Native.Sdl3.SDLCamera* camera, Inno.Native.Sdl3.SDLSurface* frame)
```

Release a frame of video acquired from a camera.
Let the back-end reuse the internal buffer for camera.
This function _must_ be called only on surface objects returned by
SDL_AcquireCameraFrame(). This function should be called as quickly as
possible after acquisition, as SDL keeps a small FIFO queue of surfaces for
video frames; if surfaces aren't released in a timely manner, SDL may drop
upcoming video frames from the camera.
If the app needs to keep the surface for a significant time, they should
make a copy of it and release the original.
The app should not use the surface again after calling this function;
assume the surface is freed and the pointer is invalid.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_AcquireCameraFrame

**Parameter `camera`:** opened camera device.

**Parameter `frame`:** the video frame surface to release.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30363).
