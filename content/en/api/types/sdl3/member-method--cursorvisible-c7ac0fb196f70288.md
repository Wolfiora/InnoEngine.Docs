---
title: "SDLContext — Method: CursorVisible"
description: "Exact Method: CursorVisible contracts in SDLContext."
uid: api.inno.native.sdl3.c7ac0fb196f70288
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: CursorVisible

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CursorVisible`

<a id="api-c7bbac2996d2cd43"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.CursorVisible 0e9b191c6aed188fd77cfce611a8c54651f3b9a5c182bd97680f984ac1740a1c -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.CursorVisible()
```

Return whether the cursor is currently being shown.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HideCursor

**See also:** SDL_ShowCursor

**Returns:** `true` if the cursor is being shown, or `false` if the cursor is
hidden.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13452).
