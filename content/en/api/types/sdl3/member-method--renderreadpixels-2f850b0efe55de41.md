---
title: "SDLContext.RawApi — Method: RenderReadPixels"
description: "Exact Method: RenderReadPixels contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2f850b0efe55de41
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RenderReadPixels

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RenderReadPixels`

<a id="api-a283ec0ffc3af38d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RenderReadPixels(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLRect*) be724bf290decc3f1572050070ab2034ae3209f0a5a533ac854093e676f20415 -->

```csharp
public Inno.Native.Sdl3.SDLSurface* Inno.Native.Sdl3.SDLContext.RawApi.RenderReadPixels(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLRect* rect)
```

Read pixels from the current rendering target.
The returned surface contains pixels inside the desired area clipped to the
current viewport, and should be freed with SDL_DestroySurface().
Note that this returns the actual pixels on the screen, so if you are using
logical presentation you should use SDL_GetRenderLogicalPresentationRect()
to get the area containing your content.
**WARNING**: This is a very slow operation, and should not be used
frequently. If you're using this on the main rendering target, it should be
called after rendering and before SDL_RenderPresent().

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `renderer`:** the rendering context.

**Parameter `rect`:** an SDL_Rect structure representing the area to read, which will
be clipped to the current viewport, or NULL for the entire
viewport.

**Returns:** a new SDL_Surface on success or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17417).
