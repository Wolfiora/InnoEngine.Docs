---
title: "SDLContext.RawApi — Method: GetRenderVSync"
description: "Exact Method: GetRenderVSync contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.62deed1509c81282
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRenderVSync

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRenderVSync`

<a id="api-c6cf671d1f310e0c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRenderVSync(Inno.Native.Sdl3.SDLRenderer*,System.Int32*) e1c3a6b8b20a53db40fbc050a9acca54fbaf3027b632fc923bc21e4560d43b1a -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetRenderVSync(Inno.Native.Sdl3.SDLRenderer* renderer, int* vsync)
```

Get VSync of the given renderer.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetRenderVSync

**Parameter `renderer`:** the renderer to toggle.

**Parameter `vsync`:** an int filled with the current vertical refresh sync interval.
See SDL_SetRenderVSync() for the meaning of the value.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43887).
