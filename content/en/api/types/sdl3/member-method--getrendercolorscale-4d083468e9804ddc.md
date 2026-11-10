---
title: "SDLContext.RawApi — Method: GetRenderColorScale"
description: "Exact Method: GetRenderColorScale contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4d083468e9804ddc
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRenderColorScale

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRenderColorScale`

<a id="api-988043f788821e3a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRenderColorScale(Inno.Native.Sdl3.SDLRenderer*,System.Single*) a10f30852253f10a1a6178cea625466bf43874e8ca4d72632925378a4669c941 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetRenderColorScale(Inno.Native.Sdl3.SDLRenderer* renderer, float* scale)
```

Get the color scale used for render operations.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetRenderColorScale

**Parameter `renderer`:** the rendering context.

**Parameter `scale`:** a pointer filled in with the current color scale value.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38441).
