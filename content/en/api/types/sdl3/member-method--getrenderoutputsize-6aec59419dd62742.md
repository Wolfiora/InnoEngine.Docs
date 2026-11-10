---
title: "SDLContext.RawApi — Method: GetRenderOutputSize"
description: "Exact Method: GetRenderOutputSize contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6aec59419dd62742
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRenderOutputSize

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRenderOutputSize`

<a id="api-a5a3a03b177fbf43"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRenderOutputSize(Inno.Native.Sdl3.SDLRenderer*,System.Int32*,System.Int32*) 98dd22c548fa2be4d20a679a6ae77f5487efbbd23e33752c93557a7c66115695 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetRenderOutputSize(Inno.Native.Sdl3.SDLRenderer* renderer, int* w, int* h)
```

Get the output size in pixels of a rendering context.
This returns the true output size in pixels, ignoring any render targets or
logical size and presentation.
For the output size of the current rendering target, with logical size
adjustments, use SDL_GetCurrentRenderOutputSize() instead.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetCurrentRenderOutputSize

**Parameter `renderer`:** the rendering context.

**Parameter `w`:** a pointer filled in with the width in pixels.

**Parameter `h`:** a pointer filled in with the height in pixels.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31817).
