---
title: "SDLContext.RawApi — Method: GetCameraPermissionState"
description: "Exact Method: GetCameraPermissionState contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e7678106b8149963
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetCameraPermissionState

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetCameraPermissionState`

<a id="api-713b99a65ef0ba48"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetCameraPermissionState(Inno.Native.Sdl3.SDLCamera*) cf96268580a70b724b3b600023be7277cd5573229c6a427c5da1de15449cdcd1 -->

```csharp
public Inno.Native.Sdl3.SDLCameraPermissionState Inno.Native.Sdl3.SDLContext.RawApi.GetCameraPermissionState(Inno.Native.Sdl3.SDLCamera* camera)
```

Query if camera access has been approved by the user.
Cameras will not function between when the device is opened by the app and
when the user permits access to the hardware. On some platforms, this
presents as a popup dialog where the user has to explicitly approve access;
on others the approval might be implicit and not alert the user at all.
This function can be used to check the status of that approval. It will
return SDL_CAMERA_PERMISSION_STATE_PENDING if waiting for user response,
SDL_CAMERA_PERMISSION_STATE_APPROVED if the camera is approved for use, and
SDL_CAMERA_PERMISSION_STATE_DENIED if the user denied access.
Instead of polling with this function, you can wait for a
SDL_EVENT_CAMERA_DEVICE_APPROVED (or SDL_EVENT_CAMERA_DEVICE_DENIED) event
in the standard SDL event loop, which is guaranteed to be sent once when
permission to use the camera is decided.
If a camera is declined, there's nothing to be done but call
SDL_CloseCamera() to dispose of it.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_OpenCamera

**See also:** SDL_CloseCamera

**Parameter `camera`:** the opened camera device to query.

**Returns:** an SDL_CameraPermissionState value indicating if access is
granted, or `SDL_CAMERA_PERMISSION_STATE_PENDING` if the decision
is still pending.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20176).
