---
title: "SDLContext.RawApi — Method: GetTextInputArea"
description: "Exact Method: GetTextInputArea contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3e96ab05a2464b92
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetTextInputArea

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTextInputArea`

<a id="api-1d15a37b99279094"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetTextInputArea(Inno.Native.Sdl3.SDLWindow*,Inno.Native.Sdl3.SDLRect*,System.Int32*) 9601662a5fa447f2d5f9048627e48138d991b8130b3a96f72845df62bdc3d0a4 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetTextInputArea(Inno.Native.Sdl3.SDLWindow* window, Inno.Native.Sdl3.SDLRect* rect, int* cursor)
```

Get the area used to type Unicode text input.
This returns the values previously set by SDL_SetTextInputArea().

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetTextInputArea

**Parameter `window`:** the window for which to query the text input area.

**Parameter `rect`:** a pointer to an SDL_Rect filled in with the text input area,
may be NULL.

**Parameter `cursor`:** a pointer to the offset of the current cursor location
relative to `rect->x`, may be NULL.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36754).
