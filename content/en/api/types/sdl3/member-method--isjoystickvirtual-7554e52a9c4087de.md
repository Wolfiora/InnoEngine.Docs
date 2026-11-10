---
title: "SDL — Method: IsJoystickVirtual"
description: "Exact Method: IsJoystickVirtual contracts in SDL."
uid: api.inno.native.sdl3.7554e52a9c4087de
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: IsJoystickVirtual

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsJoystickVirtual`

<a id="api-97c4670f3ff2a1f5"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.IsJoystickVirtual(System.UInt32) 74d1733570d098e3c607f98d833e5bc37e82718ce6b006be79b133d7b2f80927 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.IsJoystickVirtual(uint instance_id)
```

Query whether or not a joystick is virtual.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** true if the joystick is virtual, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3922).
