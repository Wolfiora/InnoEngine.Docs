---
title: "SDLContext.RawApi — Method: GetRenderTarget"
description: "Exact Method: GetRenderTarget contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.de5acfbe55da70a2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRenderTarget

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRenderTarget`

<a id="api-a9758d5503198e54"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRenderTarget(Inno.Native.Sdl3.SDLRenderer*) a26709aecad3aff4b754c79736e1534e7849f1a15606ba8112fee139286a83d0 -->

```csharp
public Inno.Native.Sdl3.SDLTexture* Inno.Native.Sdl3.SDLContext.RawApi.GetRenderTarget(Inno.Native.Sdl3.SDLRenderer* renderer)
```

Get the current render target.
The default render target is the window for which the renderer was created,
and is reported a NULL here.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetRenderTarget

**Parameter `renderer`:** the rendering context.

**Returns:** the current render target or NULL for the default render target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18525).
