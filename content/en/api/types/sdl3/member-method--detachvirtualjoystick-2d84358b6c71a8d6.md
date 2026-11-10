---
title: "SDLContext.RawApi — Method: DetachVirtualJoystick"
description: "Exact Method: DetachVirtualJoystick contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2d84358b6c71a8d6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DetachVirtualJoystick

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DetachVirtualJoystick`

<a id="api-77d041d3425c4d33"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DetachVirtualJoystick(System.UInt32) 5793a9c74f7fd6a0ac1610fc7a0920e70b9c22a21c179a21565323b274f07a65 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.DetachVirtualJoystick(uint instance_id)
```

Detach a virtual joystick.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_AttachVirtualJoystick

**Parameter `instance_id`:** the joystick instance ID, previously returned from
SDL_AttachVirtualJoystick().

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28068).
