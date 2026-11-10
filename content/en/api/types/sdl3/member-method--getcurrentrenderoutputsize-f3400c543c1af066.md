---
title: "SDLContext.RawApi — Method: GetCurrentRenderOutputSize"
description: "Exact Method: GetCurrentRenderOutputSize contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f3400c543c1af066
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetCurrentRenderOutputSize

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetCurrentRenderOutputSize`

<a id="api-6f372117b8c6d842"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetCurrentRenderOutputSize(Inno.Native.Sdl3.SDLRenderer*,System.Int32*,System.Int32*) b88b9876d5c3aef7e50bc9d8a85c1ae857958250f7833485e35b1827ab9d4a6b -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetCurrentRenderOutputSize(Inno.Native.Sdl3.SDLRenderer* renderer, int* w, int* h)
```

Get the current output size in pixels of a rendering context.
If a rendering target is active, this will return the size of the rendering
target in pixels, otherwise return the value of SDL_GetRenderOutputSize().
Rendering target or not, the output will be adjusted by the current logical
presentation state, dictated by SDL_SetRenderLogicalPresentation().

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetRenderOutputSize

**Parameter `renderer`:** the rendering context.

**Parameter `w`:** a pointer filled in with the current width.

**Parameter `h`:** a pointer filled in with the current height.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34693).
