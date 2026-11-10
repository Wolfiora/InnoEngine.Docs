---
title: "SDLContext — Method: DetachVirtualJoystick"
description: "Exact Method: DetachVirtualJoystick contracts in SDLContext."
uid: api.inno.native.sdl3.7c4973aa830a65d0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: DetachVirtualJoystick

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DetachVirtualJoystick`

<a id="api-e6bd77e5689d48f7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.DetachVirtualJoystick(System.UInt32) 31ba709b56e32f5ed8d63ee96e60598f26ebd60130e99f93bfb8a03373f8f291 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.DetachVirtualJoystick(uint instance_id)
```

Detach a virtual joystick.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_AttachVirtualJoystick

**Parameter `instance_id`:** the joystick instance ID, previously returned from
SDL_AttachVirtualJoystick().

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13076).
