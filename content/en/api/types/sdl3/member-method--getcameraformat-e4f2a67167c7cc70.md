---
title: "SDLContext.RawApi — Method: GetCameraFormat"
description: "Exact Method: GetCameraFormat contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e4f2a67167c7cc70
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetCameraFormat

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetCameraFormat`

<a id="api-b060c9bfcf80f1e7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetCameraFormat(Inno.Native.Sdl3.SDLCamera*,Inno.Native.Sdl3.SDLCameraSpec*) 1d5201e3f6a8b7d5d3974847865db91e35cb64b9190700fd328a2326f05608be -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetCameraFormat(Inno.Native.Sdl3.SDLCamera* camera, Inno.Native.Sdl3.SDLCameraSpec* spec)
```

Get the spec that a camera is using when generating images.
Note that this might not be the native format of the hardware, as SDL might
be converting to this format behind the scenes.
If the system is waiting for the user to approve access to the camera, as
some platforms require, this will return false, but this isn't necessarily
a fatal error; you should either wait for an
SDL_EVENT_CAMERA_DEVICE_APPROVED (or SDL_EVENT_CAMERA_DEVICE_DENIED) event,
or poll SDL_GetCameraPermissionState() occasionally until it returns
non-zero.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_OpenCamera

**Parameter `camera`:** opened camera device.

**Parameter `spec`:** the SDL_CameraSpec to be initialized by this function.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27735).
