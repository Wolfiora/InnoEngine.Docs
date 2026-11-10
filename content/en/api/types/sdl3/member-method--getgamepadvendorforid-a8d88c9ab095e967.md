---
title: "SDLContext — Method: GetGamepadVendorForId"
description: "Exact Method: GetGamepadVendorForId contracts in SDLContext."
uid: api.inno.native.sdl3.a8d88c9ab095e967
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetGamepadVendorForId

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadVendorForId`

<a id="api-5a04fc94d368f0e7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetGamepadVendorForId(System.UInt32) 40c7f445310cf318b1f9940e18db16d0973d51ab8ca85fdab83b08b40d76e6e4 -->

```csharp
public ushort Inno.Native.Sdl3.SDLContext.GetGamepadVendorForId(uint instance_id)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L11488).
