---
title: "SDL — Method: GetJoystickPlayerIndexForId"
description: "Exact Method: GetJoystickPlayerIndexForId contracts in SDL."
uid: api.inno.native.sdl3.d5501269a933651b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetJoystickPlayerIndexForId

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickPlayerIndexForId`

<a id="api-1a6e7bfda642f2c7"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetJoystickPlayerIndexForId(System.UInt32) a16b26d68f4aa95d1a8d1d38ee1f56dfd51ace0b666544d8543376857bce195e -->

```csharp
public static int Inno.Native.Sdl3.SDL.GetJoystickPlayerIndexForId(uint instance_id)
```

Get the player index of a joystick.
This can be called before any joysticks are opened.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickPlayerIndex

**See also:** SDL_GetJoysticks

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the player index of a joystick, or -1 if it's not available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1099).
