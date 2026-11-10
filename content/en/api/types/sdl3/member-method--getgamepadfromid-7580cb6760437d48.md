---
title: "SDLContext.RawApi — Method: GetGamepadFromId"
description: "Exact Method: GetGamepadFromId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7580cb6760437d48
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadFromId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadFromId`

<a id="api-999d04ebf4d7aa08"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadFromId(System.UInt32) 5103a32586864fe35d1123f5c787c292ebc8ea5983f2b401baa3e70f316daae0 -->

```csharp
public Inno.Native.Sdl3.SDLGamepad* Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadFromId(uint instance_id)
```

Get the SDL_Gamepad associated with a joystick instance ID, if it has been
opened.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `instance_id`:** the joystick instance ID of the gamepad.

**Returns:** an SDL_Gamepad on success or NULL on failure or if it hasn't been
opened yet; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38333).
