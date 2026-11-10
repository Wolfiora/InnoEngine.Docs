---
title: "SDLContext — Method: ShowCursor"
description: "Exact Method: ShowCursor contracts in SDLContext."
uid: api.inno.native.sdl3.67d4ee6352fd3335
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: ShowCursor

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ShowCursor`

<a id="api-9a1d9e2013c09eea"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.ShowCursor 71712e8849e669831a40149b7e6a0a10b56b91c8c85c198724418cc987892f88 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.ShowCursor()
```

Show the cursor.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CursorVisible

**See also:** SDL_HideCursor

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12737).
