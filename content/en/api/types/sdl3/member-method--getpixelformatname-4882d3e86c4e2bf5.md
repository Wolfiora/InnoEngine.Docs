---
title: "SDLContext.RawApi — Method: GetPixelFormatName"
description: "Exact Method: GetPixelFormatName contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4882d3e86c4e2bf5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetPixelFormatName

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetPixelFormatName`

<a id="api-03b62932e2afeacb"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetPixelFormatName(Inno.Native.Sdl3.SDLPixelFormat) 234de80278b2ca597055354ba89f56094b0915603b937f242dc8ee894dd00611 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetPixelFormatName(Inno.Native.Sdl3.SDLPixelFormat format)
```

Get the human readable name of a pixel format.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `format`:** the pixel format to query.

**Returns:** the human readable name of the specified pixel format or
"SDL_PIXELFORMAT_UNKNOWN" if the format isn't recognized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46499).
