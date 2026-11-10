---
title: "SDL — Method: GetGamepadTypeForId"
description: "Exact Method: GetGamepadTypeForId contracts in SDL."
uid: api.inno.native.sdl3.c3b97a63047dd4d3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetGamepadTypeForId

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadTypeForId`

<a id="api-014df30175689400"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetGamepadTypeForId(System.UInt32) aac90c93dc965b41b49aeec74ebf6fc5a408aa69b4ea231900991dc238a32479 -->

```csharp
public static Inno.Native.Sdl3.SDLGamepadType Inno.Native.Sdl3.SDL.GetGamepadTypeForId(uint instance_id)
```

Get the type of a gamepad.
This can be called before any gamepads are opened.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadType

**See also:** SDL_GetGamepads

**See also:** SDL_GetRealGamepadTypeForID

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the gamepad type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L4051).
