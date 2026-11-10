---
title: "SDL — Method: GetGamepadPlayerIndexForId"
description: "Exact Method: GetGamepadPlayerIndexForId contracts in SDL."
uid: api.inno.native.sdl3.ecd7c9fa2520d0ee
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetGamepadPlayerIndexForId

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadPlayerIndexForId`

<a id="api-401487ca2f46c726"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetGamepadPlayerIndexForId(System.UInt32) dc9884d0eae671ff78829069ec639fe08ae62afb0be2c124e9e1775b1b49a9f7 -->

```csharp
public static int Inno.Native.Sdl3.SDL.GetGamepadPlayerIndexForId(uint instance_id)
```

Get the player index of a gamepad.
This can be called before any gamepads are opened.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadPlayerIndex

**See also:** SDL_GetGamepads

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the player index of a gamepad, or -1 if it's not available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1969).
