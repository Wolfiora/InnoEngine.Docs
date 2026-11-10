---
title: "SDLContext.RawApi — Method: CreateSoftwareRenderer"
description: "Exact Method: CreateSoftwareRenderer contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.55d08753b3796515
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateSoftwareRenderer

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateSoftwareRenderer`

<a id="api-5eebead8b61ce1e2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateSoftwareRenderer(Inno.Native.Sdl3.SDLSurface*) cbfba9b066b4392293a177aee100051deddd2334dc4724a8c42b929d02f413e8 -->

```csharp
public Inno.Native.Sdl3.SDLRenderer* Inno.Native.Sdl3.SDLContext.RawApi.CreateSoftwareRenderer(Inno.Native.Sdl3.SDLSurface* surface)
```

Create a 2D software rendering context for a surface.
Two other API which can be used to create SDL_Renderer:
SDL_CreateRenderer() and SDL_CreateWindowAndRenderer(). These can _also_
create a software renderer, but they are intended to be used with an
SDL_Window as the final destination and not an SDL_Surface.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_DestroyRenderer

**Parameter `surface`:** the SDL_Surface structure representing the surface where
rendering is done.

**Returns:** a valid rendering context or NULL if there was an error; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L51258).
