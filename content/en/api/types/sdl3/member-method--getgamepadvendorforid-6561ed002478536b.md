---
title: "SDLContext.RawApi — Method: GetGamepadVendorForId"
description: "Exact Method: GetGamepadVendorForId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6561ed002478536b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadVendorForId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadVendorForId`

<a id="api-5a42a84cde898c6f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadVendorForId(System.UInt32) 83929872989f5fb43e5eeebbd9401368d84710bd2b76173a9e85747a2c86726e -->

```csharp
public ushort Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadVendorForId(uint instance_id)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16980).
