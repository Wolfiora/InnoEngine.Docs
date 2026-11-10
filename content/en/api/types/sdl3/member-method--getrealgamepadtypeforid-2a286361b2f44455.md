---
title: "SDLContext.RawApi — Method: GetRealGamepadTypeForId"
description: "Exact Method: GetRealGamepadTypeForId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2a286361b2f44455
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRealGamepadTypeForId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRealGamepadTypeForId`

<a id="api-da1d215283eec641"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRealGamepadTypeForId(System.UInt32) c10598b72e0853de25e58f527ec9b0093af7c4d3cc5bcd571b3cd9aa41f08378 -->

```csharp
public Inno.Native.Sdl3.SDLGamepadType Inno.Native.Sdl3.SDLContext.RawApi.GetRealGamepadTypeForId(uint instance_id)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34217).
