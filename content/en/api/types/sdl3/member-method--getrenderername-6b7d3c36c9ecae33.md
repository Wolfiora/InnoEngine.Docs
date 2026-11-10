---
title: "SDLContext.RawApi — Method: GetRendererName"
description: "Exact Method: GetRendererName contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6b7d3c36c9ecae33
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRendererName

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRendererName`

<a id="api-64cf1ff68aec17a7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRendererName(Inno.Native.Sdl3.SDLRenderer*) 61874f80a72a4930ef073572a52d78a3579fef456dca238bbd5941f42438e1ff -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetRendererName(Inno.Native.Sdl3.SDLRenderer* renderer)
```

Get the name of a renderer.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateRenderer

**See also:** SDL_CreateRendererWithProperties

**Parameter `renderer`:** the rendering context.

**Returns:** the name of the selected renderer, or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43703).
