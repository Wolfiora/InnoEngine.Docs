---
title: "SDL — Method: GetRealGamepadTypeForId"
description: "Exact Method: GetRealGamepadTypeForId contracts in SDL."
uid: api.inno.native.sdl3.a4709e720dc6eb9a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetRealGamepadTypeForId

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRealGamepadTypeForId`

<a id="api-a827113b6da5b2d5"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetRealGamepadTypeForId(System.UInt32) 9f1c1b03eddbb2c975a362417ebbd9d5de8c6635818ef1ceccded19c904e7de0 -->

```csharp
public static Inno.Native.Sdl3.SDLGamepadType Inno.Native.Sdl3.SDL.GetRealGamepadTypeForId(uint instance_id)
```

Get the type of a gamepad, ignoring any mapping override.
This can be called before any gamepads are opened.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadTypeForID

**See also:** SDL_GetGamepads

**See also:** SDL_GetRealGamepadType

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the gamepad type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2095).
