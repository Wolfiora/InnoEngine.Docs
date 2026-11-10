---
title: "SDLContext.RawApi — Method: GetGamepadTypeForId"
description: "Exact Method: GetGamepadTypeForId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.13af81baedbda8fd
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadTypeForId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadTypeForId`

<a id="api-c07873f1d9ceabff"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadTypeForId(System.UInt32) 1fda98118061e47061f676d6e3c784e314815db9f6f7ed0a5e079e4c871a1210 -->

```csharp
public Inno.Native.Sdl3.SDLGamepadType Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadTypeForId(uint instance_id)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50700).
