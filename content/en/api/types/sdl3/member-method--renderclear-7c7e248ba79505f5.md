---
title: "SDLContext.RawApi — Method: RenderClear"
description: "Exact Method: RenderClear contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7c7e248ba79505f5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RenderClear

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RenderClear`

<a id="api-ef8794a09530b117"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RenderClear(Inno.Native.Sdl3.SDLRenderer*) 993880f8534d97bbd49ce79e9ab2a70add53fb2faecd36e88341fc1963fe893e -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RenderClear(Inno.Native.Sdl3.SDLRenderer* renderer)
```

Clear the current rendering target with the drawing color.
This function clears the entire rendering target, ignoring the viewport and
the clip rectangle. Note, that clearing will also set/fill all pixels of
the rendering target to current renderer draw color, so make sure to invoke
SDL_SetRenderDrawColor() when needed.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetRenderDrawColor

**Parameter `renderer`:** the rendering context.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31054).
