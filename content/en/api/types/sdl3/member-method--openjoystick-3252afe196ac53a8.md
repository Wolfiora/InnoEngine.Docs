---
title: "SDLContext.RawApi — Method: OpenJoystick"
description: "Exact Method: OpenJoystick contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3252afe196ac53a8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: OpenJoystick

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OpenJoystick`

<a id="api-a1115200fbde318f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.OpenJoystick(System.UInt32) bcedccd57069a0ecb4ad838444d8656d808ffbf56c1e18e728e1d2643669e6e7 -->

```csharp
public Inno.Native.Sdl3.SDLJoystick* Inno.Native.Sdl3.SDLContext.RawApi.OpenJoystick(uint instance_id)
```

Open a joystick for use.
The joystick subsystem must be initialized before a joystick can be opened
for use.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CloseJoystick

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** a joystick identifier or NULL on failure; call SDL_GetError() for
more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31231).
