---
title: "SDLContext.RawApi — Method: GetRenderWindow"
description: "Exact Method: GetRenderWindow contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.322a04f72c1dc87a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRenderWindow

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRenderWindow`

<a id="api-14de741ecb6d62f7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRenderWindow(Inno.Native.Sdl3.SDLRenderer*) e8137028ce53cccb449cf600690ade07d6bb12d13df6ae802184bb41369ddd09 -->

```csharp
public Inno.Native.Sdl3.SDLWindow* Inno.Native.Sdl3.SDLContext.RawApi.GetRenderWindow(Inno.Native.Sdl3.SDLRenderer* renderer)
```

Get the window associated with a renderer.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `renderer`:** the renderer to query.

**Returns:** the window on success or NULL on failure; call SDL_GetError() for
more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38628).
