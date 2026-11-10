---
title: "SDLContext.RawApi — Method: GetRendererFromTexture"
description: "Exact Method: GetRendererFromTexture contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5e31a7ac69f4926f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRendererFromTexture

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRendererFromTexture`

<a id="api-84d540a27e60005f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRendererFromTexture(Inno.Native.Sdl3.SDLTexture*) 317b7d9e663967017a1a16257cf010a2d8b75435a2ed038bffd979dbeb529763 -->

```csharp
public Inno.Native.Sdl3.SDLRenderer* Inno.Native.Sdl3.SDLContext.RawApi.GetRendererFromTexture(Inno.Native.Sdl3.SDLTexture* texture)
```

Get the renderer that created an SDL_Texture.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `texture`:** the texture to query.

**Returns:** a pointer to the SDL_Renderer that created the texture, or NULL on
failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42206).
