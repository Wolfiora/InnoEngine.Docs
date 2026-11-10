---
title: "SDL — Method: GetGamepadProductForId"
description: "Exact Method: GetGamepadProductForId contracts in SDL."
uid: api.inno.native.sdl3.e7c2c5f594ee7b22
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetGamepadProductForId

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadProductForId`

<a id="api-b2f6222ae73c0c1f"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetGamepadProductForId(System.UInt32) 7a1bfc2a22fae13eacf549e782ea4c8aeea5c6f0701a4a19fa18c60b7fecb26b -->

```csharp
public static ushort Inno.Native.Sdl3.SDL.GetGamepadProductForId(uint instance_id)
```

Get the USB product ID of a gamepad, if available.
This can be called before any gamepads are opened. If the product ID isn't
available this function returns 0.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadProduct

**See also:** SDL_GetGamepads

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the USB product ID of the selected gamepad. If called on an
invalid index, this function returns zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L418).
