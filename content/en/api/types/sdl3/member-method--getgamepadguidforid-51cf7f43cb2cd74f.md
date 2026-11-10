---
title: "SDL — Method: GetGamepadGuidForId"
description: "Exact Method: GetGamepadGuidForId contracts in SDL."
uid: api.inno.native.sdl3.51cf7f43cb2cd74f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetGamepadGuidForId

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadGuidForId`

<a id="api-39fbc9349f68e947"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetGamepadGuidForId(System.UInt32) c3d89e921b6d3d59110ae0e68d6d8d52b87b414dbff0c3ee0a2df3b78e44a632 -->

```csharp
public static Inno.Native.Sdl3.SDLGUID Inno.Native.Sdl3.SDL.GetGamepadGuidForId(uint instance_id)
```

Get the implementation-dependent GUID of a gamepad.
This can be called before any gamepads are opened.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GUIDToString

**See also:** SDL_GetGamepads

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the GUID of the selected gamepad. If called on an invalid index,
this function returns a zero GUID.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L149).
