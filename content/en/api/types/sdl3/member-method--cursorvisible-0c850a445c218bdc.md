---
title: "SDL — Method: CursorVisible"
description: "Exact Method: CursorVisible contracts in SDL."
uid: api.inno.native.sdl3.0c850a445c218bdc
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: CursorVisible

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CursorVisible`

<a id="api-eb0a51a02f48811d"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.CursorVisible 58bd25999ec07f812386b04c7c19843e3c6fe53bb746ba7471aeba4a8f686621 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.CursorVisible()
```

Return whether the cursor is currently being shown.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HideCursor

**See also:** SDL_ShowCursor

**Returns:** `true` if the cursor is being shown, or `false` if the cursor is
hidden.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1726).
