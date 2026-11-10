---
title: "SDLContext — Method: GetCameraPosition"
description: "Exact Method: GetCameraPosition contracts in SDLContext."
uid: api.inno.native.sdl3.6eab2627c7f1b06b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetCameraPosition

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetCameraPosition`

<a id="api-cbae4a0c2749a2cb"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetCameraPosition(System.UInt32) 1bd54efe3e885b7645dccb0320274a4938269bc02cb73ce128a8ce1b656b49b9 -->

```csharp
public Inno.Native.Sdl3.SDLCameraPosition Inno.Native.Sdl3.SDLContext.GetCameraPosition(uint instance_id)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12175).
