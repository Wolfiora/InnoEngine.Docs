---
title: "SDLContext.RawApi — Method: GetRenderMetalCommandEncoder"
description: "Exact Method: GetRenderMetalCommandEncoder contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1dc1797ad850c44b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRenderMetalCommandEncoder

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRenderMetalCommandEncoder`

<a id="api-b253838c0d17c093"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRenderMetalCommandEncoder(Inno.Native.Sdl3.SDLRenderer*) eb8fac87c8ff214856b951f60942f5919f7755fd30263bf5ef4879685c01124a -->

```csharp
public void* Inno.Native.Sdl3.SDLContext.RawApi.GetRenderMetalCommandEncoder(Inno.Native.Sdl3.SDLRenderer* renderer)
```

Get the Metal command encoder for the current frame.
This function returns `void *`, so SDL doesn't have to include Metal's
headers, but it can be safely cast to an `id
<MTLRenderCommandEncoder
>`.
This will return NULL if Metal refuses to give SDL a drawable to render to,
which might happen if the window is hidden/minimized/offscreen. This
doesn't apply to command encoders for render targets, just the window's
backbuffer. Check your return values!

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetRenderMetalLayer

**Parameter `renderer`:** the renderer to query.

**Returns:** an `id
<MTLRenderCommandEncoder
>` on success, or NULL if the
renderer isn't a Metal renderer or there was an error.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29921).
