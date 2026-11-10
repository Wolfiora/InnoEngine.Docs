---
title: "SDL — Method: GetCameraPosition"
description: "Exact Method: GetCameraPosition contracts in SDL."
uid: api.inno.native.sdl3.9e889fe0777a8e87
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetCameraPosition

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetCameraPosition`

<a id="api-8dd143ba2e72e810"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetCameraPosition(System.UInt32) 9fe8e25b85237ef4de73afc71f5efad07fdf704037446854395a83d43fcf9355 -->

```csharp
public static Inno.Native.Sdl3.SDLCameraPosition Inno.Native.Sdl3.SDL.GetCameraPosition(uint instance_id)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L690).
