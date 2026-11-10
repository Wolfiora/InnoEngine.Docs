---
title: "SDL — Method: HideCursor"
description: "Exact Method: HideCursor contracts in SDL."
uid: api.inno.native.sdl3.77cff957dddb6de5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: HideCursor

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HideCursor`

<a id="api-c40ac414dfc91946"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.HideCursor 29f787f4cda25292d7b2c5a46240255836651d552cfc13f5412aaffcd2a6614e -->

```csharp
public static bool Inno.Native.Sdl3.SDL.HideCursor()
```

Hide the cursor.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CursorVisible

**See also:** SDL_ShowCursor

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2044).
