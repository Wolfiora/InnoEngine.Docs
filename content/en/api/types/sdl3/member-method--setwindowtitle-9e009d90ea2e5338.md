---
title: "SDLContext.RawApi — Method: SetWindowTitle"
description: "Exact Method: SetWindowTitle contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9e009d90ea2e5338
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetWindowTitle

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetWindowTitle`

<a id="api-e4c22e2e78241785"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetWindowTitle(Inno.Native.Sdl3.SDLWindow*,System.SByte*) 5ae7165c7b11ae80d8cea6b6f6c0cb9cd10101f673ad0231f0b94507d7daea74 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetWindowTitle(Inno.Native.Sdl3.SDLWindow* window, sbyte* title)
```

Set the title of a window.
This string is expected to be in UTF-8 encoding.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetWindowTitle

**Parameter `window`:** the window to change.

**Parameter `title`:** the desired window title in UTF-8 format.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34088).
