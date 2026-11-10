---
title: "SDL — Method: GetJoystickTypeForId"
description: "Exact Method: GetJoystickTypeForId contracts in SDL."
uid: api.inno.native.sdl3.28da85236e9fc987
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetJoystickTypeForId

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickTypeForId`

<a id="api-63a4a589b76258da"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetJoystickTypeForId(System.UInt32) b978d086421b76ae8495b8c691f9ce5af87110ae9c62c5ca2309ceef375607e8 -->

```csharp
public static Inno.Native.Sdl3.SDLJoystickType Inno.Native.Sdl3.SDL.GetJoystickTypeForId(uint instance_id)
```

Get the type of a joystick, if available.
This can be called before any joysticks are opened.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickType

**See also:** SDL_GetJoysticks

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the SDL_JoystickType of the selected joystick. If called with an
invalid instance_id, this function returns
`SDL_JOYSTICK_TYPE_UNKNOWN`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3474).
