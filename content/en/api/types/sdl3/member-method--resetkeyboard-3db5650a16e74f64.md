---
title: "SDL — Method: ResetKeyboard"
description: "Exact Method: ResetKeyboard contracts in SDL."
uid: api.inno.native.sdl3.3db5650a16e74f64
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: ResetKeyboard

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ResetKeyboard`

<a id="api-1db27a4efd2a11dd"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.ResetKeyboard dae5ae6942002a5407acb813744bac5465dd6a4f30b7544175cd48d001119ee0 -->

```csharp
public static void Inno.Native.Sdl3.SDL.ResetKeyboard()
```

Clear the state of the keyboard.
This function will generate key up events for all pressed keys.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetKeyboardState


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2103).
