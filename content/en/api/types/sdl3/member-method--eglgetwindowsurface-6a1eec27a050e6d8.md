---
title: "SDLContext.RawApi — Method: EglGetWindowSurface"
description: "Exact Method: EglGetWindowSurface contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6a1eec27a050e6d8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: EglGetWindowSurface

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `EglGetWindowSurface`

<a id="api-593a8f912ffbbbef"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.EglGetWindowSurface(Inno.Native.Sdl3.SDLWindow*) e76064780cec180615e8929e1c3a72adc9ce6f8b0c2b3e956054e4c340c7fbef -->

```csharp
public void* Inno.Native.Sdl3.SDLContext.RawApi.EglGetWindowSurface(Inno.Native.Sdl3.SDLWindow* window)
```

Get the EGL surface associated with the window.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `window`:** the window to query.

**Returns:** the EGLSurface pointer associated with the window, or NULL on
failure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37795).
