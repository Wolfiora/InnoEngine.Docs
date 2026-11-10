---
title: "SDLContext — Method: GetGamepadGuidForId"
description: "Exact Method: GetGamepadGuidForId contracts in SDLContext."
uid: api.inno.native.sdl3.f7ff6e8254aac617
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetGamepadGuidForId

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadGuidForId`

<a id="api-9d46f722c0245845"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetGamepadGuidForId(System.UInt32) 95555b4cdf792f4a3fab0c3977011fe15fac7a8c1a1c3c3a1f427547321d48f2 -->

```csharp
public Inno.Native.Sdl3.SDLGUID Inno.Native.Sdl3.SDLContext.GetGamepadGuidForId(uint instance_id)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L11508).
