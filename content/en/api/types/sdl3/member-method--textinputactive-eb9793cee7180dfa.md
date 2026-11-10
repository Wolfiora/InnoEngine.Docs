---
title: "SDLContext.RawApi — Method: TextInputActive"
description: "Exact Method: TextInputActive contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.eb9793cee7180dfa
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: TextInputActive

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `TextInputActive`

<a id="api-1ea7080e939332a4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.TextInputActive(Inno.Native.Sdl3.SDLWindow*) 1098c37791e37e32ed7b34fac4d7fcaf3669ed7b6ce75c1fb6433c691e5a27f3 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.TextInputActive(Inno.Native.Sdl3.SDLWindow* window)
```

Check whether or not Unicode text input events are enabled for a window.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_StartTextInput

**Parameter `window`:** the window to check.

**Returns:** true if text input events are enabled else false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26882).
