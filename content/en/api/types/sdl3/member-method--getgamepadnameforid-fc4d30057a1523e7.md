---
title: "SDLContext.RawApi — Method: GetGamepadNameForId"
description: "Exact Method: GetGamepadNameForId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.fc4d30057a1523e7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadNameForId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadNameForId`

<a id="api-2adf71c7ec39a6de"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadNameForId(System.UInt32) 68dd37050052b5a836c1bc26abf1835d5457264290c0bb738860aaade18a7591 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadNameForId(uint instance_id)
```

Get the implementation dependent name of a gamepad.
This can be called before any gamepads are opened.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadName

**See also:** SDL_GetGamepads

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the name of the selected gamepad. If no name can be found, this
function returns NULL; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25752).
