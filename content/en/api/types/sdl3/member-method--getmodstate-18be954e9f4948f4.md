---
title: "SDL — Method: GetModState"
description: "Exact Method: GetModState contracts in SDL."
uid: api.inno.native.sdl3.18be954e9f4948f4
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetModState

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetModState`

<a id="api-7ae2f3fa60c66a33"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetModState a5c09a5bc1f1f823a4c85c6c7cfbe5b4691f90ff7a6d0f19fb4b3fcdf5db9740 -->

```csharp
public static Inno.Native.Sdl3.SDLKeymod Inno.Native.Sdl3.SDL.GetModState()
```

Get the current key modifier state for the keyboard.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetKeyboardState

**See also:** SDL_SetModState

**Returns:** an OR'd combination of the modifier keys for the keyboard.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1750).
