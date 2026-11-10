---
title: "SDLContext.RawApi — Method: FlushRenderer"
description: "Exact Method: FlushRenderer contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.efd7a3de4f025b14
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: FlushRenderer

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `FlushRenderer`

<a id="api-3155b62a5fc8a6e5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.FlushRenderer(Inno.Native.Sdl3.SDLRenderer*) 67b89c42f7d1fc0fe75d63cccfa7fb2c0bcebfbaf6338dc55858381dde110cf1 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.FlushRenderer(Inno.Native.Sdl3.SDLRenderer* renderer)
```

Force the rendering context to flush any pending commands and state.
You do not need to (and in fact, shouldn't) call this function unless you
are planning to call into OpenGL/Direct3D/Metal/whatever directly, in
addition to using an SDL_Renderer.
This is for a very-specific case: if you are using SDL's render API, and
you plan to make OpenGL/D3D/whatever calls in addition to SDL render API
calls. If this applies, you should call this function between calls to
SDL's render API and the low-level API you're using in cooperation.
In all other cases, you can ignore this function.
This call makes SDL flush any pending rendering work it was queueing up to
do later in a single batch, and marks any internal cached state as invalid,
so it'll prepare all its state again later, from scratch.
This means you do not need to save state in your rendering code to protect
the SDL renderer. However, there lots of arbitrary pieces of Direct3D and
OpenGL state that can confuse things; you should use your best judgment and
be prepared to make changes if specific state needs to be protected.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `renderer`:** the rendering context.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29459).
