---
title: "SDLContext — Method: GetGamepadTypeForId"
description: "Exact Method: GetGamepadTypeForId contracts in SDLContext."
uid: api.inno.native.sdl3.04a4a41f82f1445d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetGamepadTypeForId

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadTypeForId`

<a id="api-dda211e95268b11f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetGamepadTypeForId(System.UInt32) 5485403aa84403e14f1e0c2b04f57698af582402c668ab4efb1001cff52e43c6 -->

```csharp
public Inno.Native.Sdl3.SDLGamepadType Inno.Native.Sdl3.SDLContext.GetGamepadTypeForId(uint instance_id)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16276).
