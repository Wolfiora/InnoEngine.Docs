---
title: "SDLContext.RawApi — Method: GetPixelFormatDetails"
description: "Exact Method: GetPixelFormatDetails contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.027f088a15dcd54d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetPixelFormatDetails

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetPixelFormatDetails`

<a id="api-6ea7c76a38606244"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetPixelFormatDetails(Inno.Native.Sdl3.SDLPixelFormat) 9bdd2d1d21c8417ae32819c77240b4ac90634dce607b6a8b5c7c1161a9aff6e2 -->

```csharp
public Inno.Native.Sdl3.SDLPixelFormatDetails* Inno.Native.Sdl3.SDLContext.RawApi.GetPixelFormatDetails(Inno.Native.Sdl3.SDLPixelFormat format)
```

Create an SDL_PixelFormatDetails structure corresponding to a pixel format.
Returned structure may come from a shared global cache (i.e. not newly
allocated), and hence should not be modified, especially the palette. Weird
errors such as `Blit combination not supported` may occur.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `format`:** one of the SDL_PixelFormat values.

**Returns:** a pointer to a SDL_PixelFormatDetails structure or NULL on
failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20770).
