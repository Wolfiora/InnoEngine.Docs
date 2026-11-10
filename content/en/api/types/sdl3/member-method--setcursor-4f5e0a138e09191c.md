---
title: "SDLContext.RawApi — Method: SetCursor"
description: "Exact Method: SetCursor contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4f5e0a138e09191c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetCursor

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetCursor`

<a id="api-6c9228a22038abd5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetCursor(Inno.Native.Sdl3.SDLCursor*) 0534e05757dfc0cc7c88a498d91f55199639abef5d260c5155370657e79030ab -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetCursor(Inno.Native.Sdl3.SDLCursor* cursor)
```

Set the active cursor.
This function sets the currently active cursor to the specified one. If the
cursor is currently visible, the change will be immediately represented on
the display. SDL_SetCursor(NULL) can be used to force cursor redraw, if
this is desired for any reason.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetCursor

**Parameter `cursor`:** a cursor to make active.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39739).
