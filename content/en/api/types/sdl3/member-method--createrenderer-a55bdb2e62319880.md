---
title: "SDLContext.RawApi — Method: CreateRenderer"
description: "Exact Method: CreateRenderer contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a55bdb2e62319880
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateRenderer

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateRenderer`

<a id="api-7b03fc50ef0582ea"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateRenderer(Inno.Native.Sdl3.SDLWindow*,System.SByte*) c02fcfd85d0f18cd54f457e3875b8d7ebad89b4c1a3e4e9024fc5171e4c14fd2 -->

```csharp
public Inno.Native.Sdl3.SDLRenderer* Inno.Native.Sdl3.SDLContext.RawApi.CreateRenderer(Inno.Native.Sdl3.SDLWindow* window, sbyte* name)
```

Create a 2D rendering context for a window.
If you want a specific renderer, you can specify its name here. A list of
available renderers can be obtained by calling SDL_GetRenderDriver()
multiple times, with indices from 0 to SDL_GetNumRenderDrivers()-1. If you
don't need a specific renderer, specify NULL and SDL will attempt to choose
the best option for you, based on what is available on the user's system.
If `name` is a comma-separated list, SDL will try each name, in the order
listed, until one succeeds or all of them fail.
By default the rendering size matches the window size in pixels, but you
can call SDL_SetRenderLogicalPresentation() to change the content size and
scaling options.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateRendererWithProperties

**See also:** SDL_CreateSoftwareRenderer

**See also:** SDL_DestroyRenderer

**See also:** SDL_GetNumRenderDrivers

**See also:** SDL_GetRenderDriver

**See also:** SDL_GetRendererName

**Parameter `window`:** the window where rendering is displayed.

**Parameter `name`:** the name of the rendering driver to initialize, or NULL to let
SDL choose one.

**Returns:** a valid rendering context or NULL if there was an error; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30658).
