---
title: "SDLContext.RawApi — Method: GetJoystickPathForId"
description: "Exact Method: GetJoystickPathForId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.516ba042c8f6aba0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickPathForId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickPathForId`

<a id="api-0b46d1379d8c1218"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickPathForId(System.UInt32) 03774d1d53f4ea040d1263dc01827d0147dc9eab38652817f92e22f869ba55b6 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickPathForId(uint instance_id)
```

Get the implementation dependent path of a joystick.
This can be called before any joysticks are opened.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickPath

**See also:** SDL_GetJoysticks

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the path of the selected joystick. If no path can be found, this
function returns NULL; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39532).
