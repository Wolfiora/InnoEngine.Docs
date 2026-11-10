---
title: "SDLContext — Method: HideCursor"
description: "Exact Method: HideCursor contracts in SDLContext."
uid: api.inno.native.sdl3.25302a47366a9a3e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: HideCursor

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HideCursor`

<a id="api-686aed2f2d1035bb"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.HideCursor 30e8be5c08289612644b54a0ccb679879998e26ef53351799163b242f3144782 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.HideCursor()
```

Hide the cursor.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CursorVisible

**See also:** SDL_ShowCursor

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13842).
