---
title: "SDLContext.RawApi — Method: GetGamepadPlayerIndexForId"
description: "Exact Method: GetGamepadPlayerIndexForId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.bfc710bfc846e879
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadPlayerIndexForId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadPlayerIndexForId`

<a id="api-3c3db4f074ba7b3b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadPlayerIndexForId(System.UInt32) 07307b6470cb8f08378dfc650d66f78ee12472e1a4e47ea2a621d6eb11b1d906 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadPlayerIndexForId(uint instance_id)
```

Get the player index of a gamepad.
This can be called before any gamepads are opened.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadPlayerIndex

**See also:** SDL_GetGamepads

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the player index of a gamepad, or -1 if it's not available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L33283).
