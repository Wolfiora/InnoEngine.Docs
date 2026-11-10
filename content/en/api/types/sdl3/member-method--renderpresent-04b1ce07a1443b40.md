---
title: "SDLContext.RawApi — Method: RenderPresent"
description: "Exact Method: RenderPresent contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.04b1ce07a1443b40
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RenderPresent

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RenderPresent`

<a id="api-c879224f15601503"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RenderPresent(Inno.Native.Sdl3.SDLRenderer*) dc012cb9302a64cab5822a4eaa918463283d5dea91b138e0dbc8b0f5380b0e3f -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RenderPresent(Inno.Native.Sdl3.SDLRenderer* renderer)
```

Update the screen with any rendering performed since the previous call.
SDL's rendering functions operate on a backbuffer; that is, calling a
rendering function such as SDL_RenderLine() does not directly put a line on
the screen, but rather updates the backbuffer. As such, you compose your
entire scene and *present* the composed backbuffer to the screen as a
complete picture.
Therefore, when using SDL's rendering API, one does all drawing intended
for the frame, and then calls this function once per frame to present the
final drawing to the user.
The backbuffer should be considered invalidated after each present; do not
assume that previous contents will exist between frames. You are strongly
encouraged to call SDL_RenderClear() to initialize the backbuffer before
starting each new frame's drawing, even if you plan to overwrite every
pixel.
Please note, that in case of rendering to a texture - there is **no need**
to call `SDL_RenderPresent` after drawing needed objects to a texture, and
should not be done; you are only required to change back the rendering
target to default via `SDL_SetRenderTarget(renderer, NULL)` afterwards, as
textures by themselves do not have a concept of backbuffers. Calling
SDL_RenderPresent while rendering to a texture will fail.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateRenderer

**See also:** SDL_RenderClear

**See also:** SDL_RenderFillRect

**See also:** SDL_RenderFillRects

**See also:** SDL_RenderLine

**See also:** SDL_RenderLines

**See also:** SDL_RenderPoint

**See also:** SDL_RenderPoints

**See also:** SDL_RenderRect

**See also:** SDL_RenderRects

**See also:** SDL_SetRenderDrawBlendMode

**See also:** SDL_SetRenderDrawColor

**Parameter `renderer`:** the rendering context.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32024).
