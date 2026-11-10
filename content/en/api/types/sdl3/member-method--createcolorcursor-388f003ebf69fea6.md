---
title: "SDLContext.RawApi — Method: CreateColorCursor"
description: "Exact Method: CreateColorCursor contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.388f003ebf69fea6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateColorCursor

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateColorCursor`

<a id="api-26d0dea06a7edcbf"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateColorCursor(Inno.Native.Sdl3.SDLSurface*,System.Int32,System.Int32) f7b6ebf1e236190ad42fc4f679d076536c32960bade1ae3faeff654f31ca392a -->

```csharp
public Inno.Native.Sdl3.SDLCursor* Inno.Native.Sdl3.SDLContext.RawApi.CreateColorCursor(Inno.Native.Sdl3.SDLSurface* surface, int hot_x, int hot_y)
```

Create a color cursor.
If this function is passed a surface with alternate representations added
with SDL_AddSurfaceAlternateImage(), the surface will be interpreted as the
content to be used for 100% display scale, and the alternate
representations will be used for high DPI situations if
SDL_HINT_MOUSE_DPI_SCALE_CURSORS is enabled. For example, if the original
surface is 32x32, then on a 2x macOS display or 200% display scale on
Windows, a 64x64 version of the image will be used, if available. If a
matching version of the image isn't available, the closest larger size
image will be downscaled to the appropriate size and be used instead, if
available. Otherwise, the closest smaller image will be upscaled and be
used instead.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_AddSurfaceAlternateImage

**See also:** SDL_CreateAnimatedCursor

**See also:** SDL_CreateCursor

**See also:** SDL_CreateSystemCursor

**See also:** SDL_DestroyCursor

**See also:** SDL_SetCursor

**Parameter `surface`:** an SDL_Surface structure representing the cursor image.

**Parameter `hot_x`:** the x position of the cursor hot spot.

**Parameter `hot_y`:** the y position of the cursor hot spot.

**Returns:** the new cursor on success or NULL on failure; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L35043).
