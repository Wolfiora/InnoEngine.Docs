---
title: "SDLContext.RawApi — Method: RenderRect"
description: "Exact Method: RenderRect contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.24b5bfec35914a00
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RenderRect

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RenderRect`

<a id="api-c87d4a3b46c66d57"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RenderRect(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLFRect*) a4848858bcaa814ad9898553e0af9da6269ca8b4043b387260b57240394c2a05 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RenderRect(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLFRect* rect)
```

Draw a rectangle on the current rendering target at subpixel precision.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_RenderRects

**Parameter `renderer`:** the renderer which should draw a rectangle.

**Parameter `rect`:** a pointer to the destination rectangle, or NULL to outline the
entire rendering target.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41517).
