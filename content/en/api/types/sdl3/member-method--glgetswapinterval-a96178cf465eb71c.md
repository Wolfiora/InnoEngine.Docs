---
title: "SDLContext.RawApi — Method: GlGetSwapInterval"
description: "Exact Method: GlGetSwapInterval contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a96178cf465eb71c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GlGetSwapInterval

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GlGetSwapInterval`

<a id="api-dc924a2be5cad2b7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GlGetSwapInterval(System.Int32*) 26000e24fdfc7a65ff036fc8b6813c12e867fd8a2256d12e65062b312af40c10 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GlGetSwapInterval(int* interval)
```

Get the swap interval for the current OpenGL context.
If the system can't determine the swap interval, or there isn't a valid
current context, this function will set *interval to 0 as a safe default.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GL_SetSwapInterval

**Parameter `interval`:** output interval value. 0 if there is no vertical retrace
synchronization, 1 if the buffer swap is synchronized with
the vertical retrace, and -1 if late swaps happen
immediately instead of waiting for the next retrace.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17721).
