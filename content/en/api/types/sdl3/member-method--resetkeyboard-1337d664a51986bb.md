---
title: "SDLContext — Method: ResetKeyboard"
description: "Exact Method: ResetKeyboard contracts in SDLContext."
uid: api.inno.native.sdl3.1337d664a51986bb
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: ResetKeyboard

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ResetKeyboard`

<a id="api-58710ded1ce6a3dc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.ResetKeyboard e2f46037fa848899354a3d9bbe1eae2143c1fa4f58565ef42754c019482720f0 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.ResetKeyboard()
```

Clear the state of the keyboard.
This function will generate key up events for all pressed keys.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetKeyboardState


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13913).
