---
title: "SDLContext.RawApi — Method: CreateAnimatedCursor"
description: "Exact Method: CreateAnimatedCursor contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.91c73993fd516c78
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateAnimatedCursor

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateAnimatedCursor`

<a id="api-cbe87e9fb32a1b36"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateAnimatedCursor(Inno.Native.Sdl3.SDLCursorFrameInfo*,System.Int32,System.Int32,System.Int32) b1716a2cd8b60bb0eb8fcb01eea30d6434d0c1146979c08a097184e7dd9af873 -->

```csharp
public Inno.Native.Sdl3.SDLCursor* Inno.Native.Sdl3.SDLContext.RawApi.CreateAnimatedCursor(Inno.Native.Sdl3.SDLCursorFrameInfo* frames, int frame_count, int hot_x, int hot_y)
```

Create an animated color cursor.
Animated cursors are composed of a sequential array of frames, specified as
surfaces and durations in an array of SDL_CursorFrameInfo structs. The hot
spot coordinates are universal to all frames, and all frames must have the
same dimensions.
Frame durations are specified in milliseconds. A duration of 0 implies an
infinite frame time, and the animation will stop on that frame. To create a
one-shot animation, set the duration of the last frame in the sequence to
0.
If this function is passed surfaces with alternate representations added
with SDL_AddSurfaceAlternateImage(), the surfaces will be interpreted as
the content to be used for 100% display scale, and the alternate
representations will be used for high DPI situations. For example, if the
original surfaces are 32x32, then on a 2x macOS display or 200% display
scale on Windows, a 64x64 version of the image will be used, if available.
If a matching version of the image isn't available, the closest larger size
image will be downscaled to the appropriate size and be used instead, if
available. Otherwise, the closest smaller image will be upscaled and be
used instead.
If the underlying platform does not support animated cursors, this function
will fall back to creating a static color cursor using the first frame in
the sequence.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.4.0.

**See also:** SDL_AddSurfaceAlternateImage

**See also:** SDL_CreateCursor

**See also:** SDL_CreateColorCursor

**See also:** SDL_CreateSystemCursor

**See also:** SDL_DestroyCursor

**See also:** SDL_SetCursor

**Parameter `frames`:** an array of cursor images composing the animation.

**Parameter `frame_count`:** the number of frames in the sequence.

**Parameter `hot_x`:** the x position of the cursor hot spot.

**Parameter `hot_y`:** the y position of the cursor hot spot.

**Returns:** the new cursor on success or NULL on failure; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23269).
