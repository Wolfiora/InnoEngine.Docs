---
title: "SDLContext.RawApi — Method: WindowHasSurface"
description: "Exact Method: WindowHasSurface contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.69a93e29280a8fda
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WindowHasSurface

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WindowHasSurface`

<a id="api-83e5285322a6ba94"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WindowHasSurface(Inno.Native.Sdl3.SDLWindow*) 902bec08c2b6c5bd49d3ffad3aa80a7d3bd76844a2d1708a4c505bc1b0bd114a -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WindowHasSurface(Inno.Native.Sdl3.SDLWindow* window)
```

Return whether the window has a surface associated with it.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetWindowSurface

**Parameter `window`:** the window to query.

**Returns:** true if there is a surface associated with the window, or false
otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L48494).
