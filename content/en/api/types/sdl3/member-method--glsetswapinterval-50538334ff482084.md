---
title: "SDLContext.RawApi — Method: GlSetSwapInterval"
description: "Exact Method: GlSetSwapInterval contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.50538334ff482084
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GlSetSwapInterval

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GlSetSwapInterval`

<a id="api-134f8c026ef6cd6f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GlSetSwapInterval(System.Int32) 0d276d033d371f5dc3360663958cfbee9a876f01076b7944a7a430fa3545b565 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GlSetSwapInterval(int interval)
```

Set the swap interval for the current OpenGL context.
Some systems allow specifying -1 for the interval, to enable adaptive
vsync. Adaptive vsync works the same as vsync, but if you've already missed
the vertical retrace for a given frame, it swaps buffers immediately, which
might be less jarring for the user during occasional framerate drops. If an
application requests adaptive vsync and the system does not support it,
this function will fail and return false. In such a case, you should
probably retry the call with 1 for the interval.
Adaptive vsync is implemented for some glX drivers with
GLX_EXT_swap_control_tear, and for some Windows drivers with
WGL_EXT_swap_control_tear.
Read more on the Khronos wiki:
https://www.khronos.org/opengl/wiki/Swap_Interval#Adaptive_Vsync

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GL_GetSwapInterval

**Parameter `interval`:** 0 for immediate updates, 1 for updates synchronized with
the vertical retrace, -1 for adaptive vsync.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18442).
