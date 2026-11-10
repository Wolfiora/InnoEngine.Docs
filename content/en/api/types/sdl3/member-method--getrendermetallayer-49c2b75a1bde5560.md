---
title: "SDLContext.RawApi — Method: GetRenderMetalLayer"
description: "Exact Method: GetRenderMetalLayer contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.49c2b75a1bde5560
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRenderMetalLayer

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRenderMetalLayer`

<a id="api-7af9f012e54c8013"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRenderMetalLayer(Inno.Native.Sdl3.SDLRenderer*) 9d2d7d5d67227f735242c54140456cdeb0db6348c4d1c9de85a02eee67695fcf -->

```csharp
public void* Inno.Native.Sdl3.SDLContext.RawApi.GetRenderMetalLayer(Inno.Native.Sdl3.SDLRenderer* renderer)
```

Get the CAMetalLayer associated with the given Metal renderer.
This function returns `void *`, so SDL doesn't have to include Metal's
headers, but it can be safely cast to a `CAMetalLayer *`.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetRenderMetalCommandEncoder

**Parameter `renderer`:** the renderer to query.

**Returns:** a `CAMetalLayer *` on success, or NULL if the renderer isn't a
Metal renderer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22773).
