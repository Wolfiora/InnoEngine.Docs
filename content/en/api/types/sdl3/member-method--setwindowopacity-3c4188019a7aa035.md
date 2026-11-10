---
title: "SDLContext.RawApi — Method: SetWindowOpacity"
description: "Exact Method: SetWindowOpacity contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3c4188019a7aa035
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetWindowOpacity

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetWindowOpacity`

<a id="api-8ee6951078359b9c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetWindowOpacity(Inno.Native.Sdl3.SDLWindow*,System.Single) b630d47d947bc58b434d870d261f7d0cd34f2d9c93f42d6508f3b123d341695a -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetWindowOpacity(Inno.Native.Sdl3.SDLWindow* window, float opacity)
```

Set the opacity for a window.
The parameter `opacity` will be clamped internally between 0.0f
(transparent) and 1.0f (opaque).
This function also returns false if setting the opacity isn't supported.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetWindowOpacity

**Parameter `window`:** the window which will be made transparent or opaque.

**Parameter `opacity`:** the opacity value (0.0f - transparent, 1.0f - opaque).

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25622).
