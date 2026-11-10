---
title: "SDLContext.RawApi — Method: GetRenderer"
description: "Exact Method: GetRenderer contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ff7ad2806fe3e225
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRenderer

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRenderer`

<a id="api-520de71698f6bbe1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRenderer(Inno.Native.Sdl3.SDLWindow*) 36763e41fcc799bc7aa237075e8ee194a164e0ad3be7b5e5b3ee5d01b7a11366 -->

```csharp
public Inno.Native.Sdl3.SDLRenderer* Inno.Native.Sdl3.SDLContext.RawApi.GetRenderer(Inno.Native.Sdl3.SDLWindow* window)
```

Get the renderer associated with a window.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `window`:** the window to query.

**Returns:** the rendering context on success or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41796).
