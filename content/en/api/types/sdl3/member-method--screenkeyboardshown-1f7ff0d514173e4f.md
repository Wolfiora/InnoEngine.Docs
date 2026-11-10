---
title: "SDLContext.RawApi — Method: ScreenKeyboardShown"
description: "Exact Method: ScreenKeyboardShown contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1f7ff0d514173e4f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ScreenKeyboardShown

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ScreenKeyboardShown`

<a id="api-8809366cb9f69835"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ScreenKeyboardShown(Inno.Native.Sdl3.SDLWindow*) a366bd5d205f98632cfa0206b70d18a8ee7934961d4b52a9c3eaca24a8ebc928 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ScreenKeyboardShown(Inno.Native.Sdl3.SDLWindow* window)
```

Check whether the screen keyboard is shown for given window.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasScreenKeyboardSupport

**Parameter `window`:** the window for which screen keyboard should be queried.

**Returns:** true if screen keyboard is shown or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20630).
