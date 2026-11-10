---
title: "SDLContext.RawApi — Method: OpenCamera"
description: "Exact Method: OpenCamera contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3fd2b27a5f140c7f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: OpenCamera

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OpenCamera`

<a id="api-ab80a971f7ba0aa4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.OpenCamera(System.UInt32,Inno.Native.Sdl3.SDLCameraSpec*) 2d13b0e3fbfc9501446ef896a65ea7d218fbbd357bb48c545eff3ed601da7605 -->

```csharp
public Inno.Native.Sdl3.SDLCamera* Inno.Native.Sdl3.SDLContext.RawApi.OpenCamera(uint instance_id, Inno.Native.Sdl3.SDLCameraSpec* spec)
```

Open a video recording device (a "camera").
You can open the device with any reasonable spec, and if the hardware can't
directly support it, it will convert data seamlessly to the requested
format. This might incur overhead, including scaling of image data.
If you would rather accept whatever format the device offers, you can pass
a NULL spec here and it will choose one for you (and you can use
SDL_Surface's conversion/scaling functions directly if necessary).
You can call SDL_GetCameraFormat() to get the actual data format if passing
a NULL spec here. You can see the exact specs a device can support without
conversion with SDL_GetCameraSupportedFormats().
SDL will not attempt to emulate framerate; it will try to set the hardware
to the rate closest to the requested speed, but it won't attempt to limit
or duplicate frames artificially; call SDL_GetCameraFormat() to see the
actual framerate of the opened the device, and check your timestamps if
this is crucial to your app!
Note that the camera is not usable until the user approves its use! On some
platforms, the operating system will prompt the user to permit access to
the camera, and they can choose Yes or No at that point. Until they do, the
camera will not be usable. The app should either wait for an
SDL_EVENT_CAMERA_DEVICE_APPROVED (or SDL_EVENT_CAMERA_DEVICE_DENIED) event,
or poll SDL_GetCameraPermissionState() occasionally until it returns
non-zero. On platforms that don't require explicit user approval (and
perhaps in places where the user previously permitted access), the approval
event might come immediately, but it might come seconds, minutes, or hours
later!

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetCameras

**See also:** SDL_GetCameraFormat

**Parameter `instance_id`:** the camera device instance ID.

**Parameter `spec`:** the desired format for data the device will provide. Can be
NULL.

**Returns:** an SDL_Camera object or NULL on failure; call SDL_GetError() for
more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25729).
