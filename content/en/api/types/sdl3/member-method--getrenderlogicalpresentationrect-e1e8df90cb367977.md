---
title: "SDLContext.RawApi — Method: GetRenderLogicalPresentationRect"
description: "Exact Method: GetRenderLogicalPresentationRect contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e1e8df90cb367977
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRenderLogicalPresentationRect

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRenderLogicalPresentationRect`

<a id="api-d13598b7b011cc43"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRenderLogicalPresentationRect(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLFRect*) e7639d467a0f75b7246b126497f87e979963d7a317a5dc647e1e2b8c585b058d -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetRenderLogicalPresentationRect(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLFRect* rect)
```

Get the final presentation rectangle for rendering.
This function returns the calculated rectangle used for logical
presentation, based on the presentation mode and output size. If logical
presentation is disabled, it will fill the rectangle with the output size,
in pixels.
Each render target has its own logical presentation state. This function
gets the rectangle for the current render target.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetRenderLogicalPresentation

**Parameter `renderer`:** the rendering context.

**Parameter `rect`:** a pointer filled in with the final presentation rectangle, may
be NULL.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31459).
