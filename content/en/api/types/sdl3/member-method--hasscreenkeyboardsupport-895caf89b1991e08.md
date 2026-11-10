---
title: "SDL — Method: HasScreenKeyboardSupport"
description: "Exact Method: HasScreenKeyboardSupport contracts in SDL."
uid: api.inno.native.sdl3.895caf89b1991e08
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: HasScreenKeyboardSupport

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasScreenKeyboardSupport`

<a id="api-0a0ed07bcb77d26f"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.HasScreenKeyboardSupport 01fdb5bbde859e44655c67e4e6f3017d82c3b04247dd0949d9c6e6d1c3d22c09 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.HasScreenKeyboardSupport()
```

Check whether the platform has screen keyboard support.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_StartTextInput

**See also:** SDL_ScreenKeyboardShown

**Returns:** true if the platform has some screen keyboard support or false if
not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1148).
