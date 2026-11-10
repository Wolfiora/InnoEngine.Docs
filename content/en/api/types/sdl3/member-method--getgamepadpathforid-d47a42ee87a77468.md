---
title: "SDLContext.RawApi — Method: GetGamepadPathForId"
description: "Exact Method: GetGamepadPathForId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d47a42ee87a77468
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadPathForId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadPathForId`

<a id="api-52ffc167a78a7f2a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadPathForId(System.UInt32) 008525e4b13d759a83750e17b8c6ce2134223f8cced0a72a44d52fb536f85b25 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadPathForId(uint instance_id)
```

Get the implementation dependent path of a gamepad.
This can be called before any gamepads are opened.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadPath

**See also:** SDL_GetGamepads

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the path of the selected gamepad. If no path can be found, this
function returns NULL; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22839).
