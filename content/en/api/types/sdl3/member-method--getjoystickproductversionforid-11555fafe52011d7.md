---
title: "SDL — Method: GetJoystickProductVersionForId"
description: "Exact Method: GetJoystickProductVersionForId contracts in SDL."
uid: api.inno.native.sdl3.11555fafe52011d7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetJoystickProductVersionForId

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickProductVersionForId`

<a id="api-f515beb52b3baef1"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetJoystickProductVersionForId(System.UInt32) a9ef4a8e0a45941a77eb7482c62c95c3d408d29e57e34a9ea7775d86c31b3da2 -->

```csharp
public static ushort Inno.Native.Sdl3.SDL.GetJoystickProductVersionForId(uint instance_id)
```

Get the product version of a joystick, if available.
This can be called before any joysticks are opened. If the product version
isn't available this function returns 0.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickProductVersion

**See also:** SDL_GetJoysticks

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the product version of the selected joystick. If called with an
invalid instance_id, this function returns 0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L901).
