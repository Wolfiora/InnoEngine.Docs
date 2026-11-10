---
title: "SDLContext.RawApi — Method: AcquireCameraFrame"
description: "Exact Method: AcquireCameraFrame contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3a1d005b825fd542
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: AcquireCameraFrame

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `AcquireCameraFrame`

<a id="api-ffcd331735060df7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.AcquireCameraFrame(Inno.Native.Sdl3.SDLCamera*,System.UInt64*) 7ecb1944cd2f27b2b18aea73c0d8039bba1f82d0b8dedd06d31bf2b2867a3c29 -->

```csharp
public Inno.Native.Sdl3.SDLSurface* Inno.Native.Sdl3.SDLContext.RawApi.AcquireCameraFrame(Inno.Native.Sdl3.SDLCamera* camera, ulong* timestampNS)
```

Acquire a frame.
The frame is a memory pointer to the image data, whose size and format are
given by the spec requested when opening the device.
This is a non blocking API. If there is a frame available, a non-NULL
surface is returned, and timestampNS will be filled with a non-zero value.
Note that an error case can also return NULL, but a NULL by itself is
normal and just signifies that a new frame is not yet available. Note that
even if a camera device fails outright (a USB camera is unplugged while in
use, etc), SDL will send an event separately to notify the app, but
continue to provide blank frames at ongoing intervals until
SDL_CloseCamera() is called, so real failure here is almost always an out
of memory condition.
After use, the frame should be released with SDL_ReleaseCameraFrame(). If
you don't do this, the system may stop providing more video!
Do not call SDL_DestroySurface() on the returned surface! It must be given
back to the camera subsystem with SDL_ReleaseCameraFrame!
If the system is waiting for the user to approve access to the camera, as
some platforms require, this will return NULL (no frames available); you
should either wait for an SDL_EVENT_CAMERA_DEVICE_APPROVED (or
SDL_EVENT_CAMERA_DEVICE_DENIED) event, or poll
SDL_GetCameraPermissionState() occasionally until it returns non-zero.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ReleaseCameraFrame

**Parameter `camera`:** opened camera device.

**Parameter `timestampNS`:** a pointer filled in with the frame's timestamp, or 0 on
error. Can be NULL.

**Returns:** a new frame of video on success, NULL if none is currently
available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L48366).
