---
title: "SDLContext.RawApi — Method: GetJoystickVendorForId"
description: "Exact Method: GetJoystickVendorForId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.99e0124ab38a5a8d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickVendorForId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickVendorForId`

<a id="api-5e2d3f814ec649d9"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickVendorForId(System.UInt32) acc4a143bc0526b260348914a68e336b966b25277c653648a0f299fa6498889c -->

```csharp
public ushort Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickVendorForId(uint instance_id)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45151).
