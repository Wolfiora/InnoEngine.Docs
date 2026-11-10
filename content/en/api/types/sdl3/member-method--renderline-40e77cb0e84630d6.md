---
title: "SDLContext.RawApi — Method: RenderLine"
description: "Exact Method: RenderLine contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.40e77cb0e84630d6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RenderLine

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RenderLine`

<a id="api-0331106bf3de8b82"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RenderLine(Inno.Native.Sdl3.SDLRenderer*,System.Single,System.Single,System.Single,System.Single) 08fa9438532b2a1dfab0166df7bf3e97ea3932da303d39135e0232a4153ed628 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RenderLine(Inno.Native.Sdl3.SDLRenderer* renderer, float x1, float y1, float x2, float y2)
```

Draw a line on the current rendering target at subpixel precision.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_RenderLines

**Parameter `renderer`:** the renderer which should draw a line.

**Parameter `x1`:** the x coordinate of the start point.

**Parameter `y1`:** the y coordinate of the start point.

**Parameter `x2`:** the x coordinate of the end point.

**Parameter `y2`:** the y coordinate of the end point.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37902).
