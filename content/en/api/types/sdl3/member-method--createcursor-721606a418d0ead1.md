---
title: "SDLContext.RawApi — Method: CreateCursor"
description: "Exact Method: CreateCursor contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.721606a418d0ead1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateCursor

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateCursor`

<a id="api-f001f5989a90f812"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateCursor(System.Byte*,System.Byte*,System.Int32,System.Int32,System.Int32,System.Int32) 1187f0f9a140d43cd823dca4472a2db7c55122b454a1317999ae705a3da1986e -->

```csharp
public Inno.Native.Sdl3.SDLCursor* Inno.Native.Sdl3.SDLContext.RawApi.CreateCursor(byte* data, byte* mask, int w, int h, int hot_x, int hot_y)
```

Create a cursor using the specified bitmap data and mask (in MSB format).
`mask` has to be in MSB (Most Significant Bit) format.
The cursor width (`w`) must be a multiple of 8 bits.
The cursor is created in black and white according to the following:
- data=0, mask=1: white
- data=1, mask=1: black
- data=0, mask=0: transparent
- data=1, mask=0: inverted color if possible, black if not.
Cursors created with this function must be freed with SDL_DestroyCursor().
If you want to have a color cursor, or create your cursor from an
SDL_Surface, you should use SDL_CreateColorCursor(). Alternately, you can
hide the cursor and draw your own as part of your game's rendering, but it
will be bound to the framerate.
Also, SDL_CreateSystemCursor() is available, which provides several
readily-available system cursors to pick from.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateAnimatedCursor

**See also:** SDL_CreateColorCursor

**See also:** SDL_CreateSystemCursor

**See also:** SDL_DestroyCursor

**See also:** SDL_SetCursor

**Parameter `data`:** the color value for each pixel of the cursor.

**Parameter `mask`:** the mask value for each pixel of the cursor.

**Parameter `w`:** the width of the cursor.

**Parameter `h`:** the height of the cursor.

**Parameter `hot_x`:** the x-axis offset from the left of the cursor image to the
mouse x position, in the range of 0 to `w` - 1.

**Parameter `hot_y`:** the y-axis offset from the top of the cursor image to the
mouse y position, in the range of 0 to `h` - 1.

**Returns:** a new cursor with the specified parameters on success or NULL on
failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L33237).
