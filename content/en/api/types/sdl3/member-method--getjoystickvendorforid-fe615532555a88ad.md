---
title: "SDLContext — Method: GetJoystickVendorForId"
description: "Exact Method: GetJoystickVendorForId contracts in SDLContext."
uid: api.inno.native.sdl3.fe615532555a88ad
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetJoystickVendorForId

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickVendorForId`

<a id="api-ea63b4a56101c56f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetJoystickVendorForId(System.UInt32) 67d6aff67a3c1ec75e39ae3a7084979cfd399930e951eeb42b5e5c4ad7dc28ff -->

```csharp
public ushort Inno.Native.Sdl3.SDLContext.GetJoystickVendorForId(uint instance_id)
```

Get the USB vendor ID of a joystick, if available.
This can be called before any joysticks are opened. If the vendor ID isn't
available this function returns 0.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickVendor

**See also:** SDL_GetJoysticks

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the USB vendor ID of the selected joystick. If called with an
invalid instance_id, this function returns 0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15607).
