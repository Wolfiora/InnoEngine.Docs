---
title: "SDLContext — Method: IsJoystickVirtual"
description: "Exact Method: IsJoystickVirtual contracts in SDLContext."
uid: api.inno.native.sdl3.28fc4443299d4b7a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: IsJoystickVirtual

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsJoystickVirtual`

<a id="api-482f1deb2db705ff"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.IsJoystickVirtual(System.UInt32) c00a0de4644585e7941ba55a047650b4998a8d54ee641bae341071a2d0d027e7 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.IsJoystickVirtual(uint instance_id)
```

Query whether or not a joystick is virtual.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** true if the joystick is virtual, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16118).
