---
title: "SDL — Method: GetGamepadProductVersionForId"
description: "Exact Method: GetGamepadProductVersionForId contracts in SDL."
uid: api.inno.native.sdl3.afdf76bbecaf7a3f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetGamepadProductVersionForId

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadProductVersionForId`

<a id="api-195f6d87171fec81"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetGamepadProductVersionForId(System.UInt32) 6c121e05f5b3730d06ba7ba8eb28bb95b08904daabd774123b3d7d7cf42ba8ac -->

```csharp
public static ushort Inno.Native.Sdl3.SDL.GetGamepadProductVersionForId(uint instance_id)
```

Get the product version of a gamepad, if available.
This can be called before any gamepads are opened. If the product version
isn't available this function returns 0.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadProductVersion

**See also:** SDL_GetGamepads

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the product version of the selected gamepad. If called on an
invalid index, this function returns zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3197).
