---
title: "SDLContext.RawApi — Method: HideWindow"
description: "Exact Method: HideWindow contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.767cd8522d499877
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HideWindow

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HideWindow`

<a id="api-e6aef086f45d9e9e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HideWindow(Inno.Native.Sdl3.SDLWindow*) 96fc28721dbf79365073cbd096808e4cb7e753f425b67b29ec6a1ef28e15a215 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HideWindow(Inno.Native.Sdl3.SDLWindow* window)
```

Hide a window.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ShowWindow

**See also:** SDL_WINDOW_HIDDEN

**Parameter `window`:** the window to hide.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26137).
