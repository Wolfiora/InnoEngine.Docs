---
title: "SDL — Method: SetModState"
description: "Exact Method: SetModState contracts in SDL."
uid: api.inno.native.sdl3.8fb005e5194feef0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: SetModState

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetModState`

<a id="api-e2b081b90c927acd"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.SetModState(Inno.Native.Sdl3.SDLKeymod) 1a460de9af2bc476e870905eac817dd8c891f910cf895785913e8f6a838a0185 -->

```csharp
public static void Inno.Native.Sdl3.SDL.SetModState(Inno.Native.Sdl3.SDLKeymod modstate)
```

Set the current key modifier state for the keyboard.
The inverse of SDL_GetModState(), SDL_SetModState() allows you to impose
modifier key states on your application. Simply pass your desired modifier
states into `modstate`. This value may be a bitwise, OR'd combination of
SDL_Keymod values.
This does not change the keyboard state, only the key modifier flags that
SDL reports.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetModState

**Parameter `modstate`:** the desired SDL_Keymod for the keyboard.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3382).
