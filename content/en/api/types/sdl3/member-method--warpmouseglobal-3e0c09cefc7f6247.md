---
title: "SDLContext — Method: WarpMouseGlobal"
description: "Exact Method: WarpMouseGlobal contracts in SDLContext."
uid: api.inno.native.sdl3.3e0c09cefc7f6247
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: WarpMouseGlobal

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WarpMouseGlobal`

<a id="api-360d9becf8aba543"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.WarpMouseGlobal(System.Single,System.Single) 503e00a71b729a6c5599df2d913bc3c6cc3c15a9e98a1ea1bc781c9ba4fac3ee -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.WarpMouseGlobal(float x, float y)
```

Move the mouse to the given position in global screen space.
This function generates a mouse motion event.
A failure of this function usually means that it is unsupported by a
platform.
Note that this function will appear to succeed, but not actually move the
mouse when used over Microsoft Remote Desktop.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_WarpMouseInWindow

**Parameter `x`:** the x coordinate.

**Parameter `y`:** the y coordinate.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12034).
