---
title: "SDL — Method: GetJoystickGuidForId"
description: "Exact Method: GetJoystickGuidForId contracts in SDL."
uid: api.inno.native.sdl3.46040820e383c00b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetJoystickGuidForId

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickGuidForId`

<a id="api-c8a743e24c21542d"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetJoystickGuidForId(System.UInt32) 34decefee547928247df4d0beacceb3bca48b0ce629fa2e1a5efe98b1bbbc2b6 -->

```csharp
public static Inno.Native.Sdl3.SDLGUID Inno.Native.Sdl3.SDL.GetJoystickGuidForId(uint instance_id)
```

Get the implementation-dependent GUID of a joystick.
This can be called before any joysticks are opened.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickGUID

**See also:** SDL_GUIDToString

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the GUID of the selected joystick. If called with an invalid
instance_id, this function returns a zero GUID.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1701).
