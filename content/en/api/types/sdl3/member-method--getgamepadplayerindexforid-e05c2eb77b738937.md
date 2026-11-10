---
title: "SDLContext — Method: GetGamepadPlayerIndexForId"
description: "Exact Method: GetGamepadPlayerIndexForId contracts in SDLContext."
uid: api.inno.native.sdl3.e05c2eb77b738937
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetGamepadPlayerIndexForId

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadPlayerIndexForId`

<a id="api-0d54ea7bd37fc9c8"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetGamepadPlayerIndexForId(System.UInt32) 05a703f55f4cbfa0867ff515f28c918db551a7d9f9522af4e7a8c87a3959ca68 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.GetGamepadPlayerIndexForId(uint instance_id)
```

Get the player index of a gamepad.
This can be called before any gamepads are opened.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadPlayerIndex

**See also:** SDL_GetGamepads

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the player index of a gamepad, or -1 if it's not available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13751).
