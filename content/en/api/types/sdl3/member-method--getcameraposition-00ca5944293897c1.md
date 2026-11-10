---
title: "SDLContext.RawApi — Method: GetCameraPosition"
description: "Exact Method: GetCameraPosition contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.00ca5944293897c1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetCameraPosition

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetCameraPosition`

<a id="api-0ecf81cbe7c3fe36"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetCameraPosition(System.UInt32) 83356e3edd6d4fa2eede945e15178945ac6598ed20c6d83521dda682704e23b0 -->

```csharp
public Inno.Native.Sdl3.SDLCameraPosition Inno.Native.Sdl3.SDLContext.RawApi.GetCameraPosition(uint instance_id)
```

Get the position of the camera in relation to the system.
Most platforms will report UNKNOWN, but mobile devices, like phones, can
often make a distinction between cameras on the front of the device (that
points towards the user, for taking "selfies") and cameras on the back (for
filming in the direction the user is facing).

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetCameras

**Parameter `instance_id`:** the camera device instance ID.

**Returns:** the position of the camera on the system hardware.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21227).
