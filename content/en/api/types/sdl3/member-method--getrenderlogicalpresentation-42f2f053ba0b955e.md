---
title: "SDLContext.RawApi — Method: GetRenderLogicalPresentation"
description: "Exact Method: GetRenderLogicalPresentation contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.42f2f053ba0b955e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRenderLogicalPresentation

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRenderLogicalPresentation`

<a id="api-db07bb6573572892"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRenderLogicalPresentation(Inno.Native.Sdl3.SDLRenderer*,System.Int32*,System.Int32*,Inno.Native.Sdl3.SDLRendererLogicalPresentation*) 466d3ca978950d2f39d3d503db62ca46d9c71c52779838ec195c256b40d039be -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetRenderLogicalPresentation(Inno.Native.Sdl3.SDLRenderer* renderer, int* w, int* h, Inno.Native.Sdl3.SDLRendererLogicalPresentation* mode)
```

Get device independent resolution and presentation mode for rendering.
This function gets the width and height of the logical rendering output, or
0 if a logical resolution is not enabled.
Each render target has its own logical presentation state. This function
gets the state for the current render target.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetRenderLogicalPresentation

**Parameter `renderer`:** the rendering context.

**Parameter `w`:** an int filled with the logical presentation width.

**Parameter `h`:** an int filled with the logical presentation height.

**Parameter `mode`:** a variable filled with the logical presentation mode being
used.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42547).
