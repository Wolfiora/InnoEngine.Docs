---
title: "SDL — Method: GetJoystickProductForId"
description: "Exact Method: GetJoystickProductForId contracts in SDL."
uid: api.inno.native.sdl3.06e6f5801eb354e0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetJoystickProductForId

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickProductForId`

<a id="api-7b7c00746638d821"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetJoystickProductForId(System.UInt32) f78791796cfbc76155ed37beebf2741e013d73d45a8c8ea9587eaff2365e4f65 -->

```csharp
public static ushort Inno.Native.Sdl3.SDL.GetJoystickProductForId(uint instance_id)
```

Get the USB product ID of a joystick, if available.
This can be called before any joysticks are opened. If the product ID isn't
available this function returns 0.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickProduct

**See also:** SDL_GetJoysticks

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the USB product ID of the selected joystick. If called with an
invalid instance_id, this function returns 0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L732).
