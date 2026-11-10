---
title: "SDLContext.RawApi — Method: ShowCursor"
description: "Exact Method: ShowCursor contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6992051399217ac7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ShowCursor

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ShowCursor`

<a id="api-86fa370e2217435e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ShowCursor 1feda76b7cc90bf0f51e3b2c8ccbc69999fd130b3d03badaa85b52dbb8fb63ea -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ShowCursor()
```

Show the cursor.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CursorVisible

**See also:** SDL_HideCursor

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25426).
