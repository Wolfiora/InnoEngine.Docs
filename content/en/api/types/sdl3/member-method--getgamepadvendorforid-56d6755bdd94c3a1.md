---
title: "SDL — Method: GetGamepadVendorForId"
description: "Exact Method: GetGamepadVendorForId contracts in SDL."
uid: api.inno.native.sdl3.56d6755bdd94c3a1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetGamepadVendorForId

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadVendorForId`

<a id="api-bc951ce450c31334"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetGamepadVendorForId(System.UInt32) 69dc7466db1c952fcb96de71c8657e07de71a3dfa01d04d34c13d3cd3cc34504 -->

```csharp
public static ushort Inno.Native.Sdl3.SDL.GetGamepadVendorForId(uint instance_id)
```

Get the USB vendor ID of a gamepad, if available.
This can be called before any gamepads are opened. If the vendor ID isn't
available this function returns 0.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadVendor

**See also:** SDL_GetGamepads

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the USB vendor ID of the selected gamepad. If called on an invalid
index, this function returns zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L133).
