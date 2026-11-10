---
title: "SDLContext — Method: GetModState"
description: "Exact Method: GetModState contracts in SDLContext."
uid: api.inno.native.sdl3.55ba2a4f6163a5d3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetModState

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetModState`

<a id="api-249b58441b6b71c9"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetModState 1b60e00332206f355a54b78a238b113719fdbb257b63e8c556871d7a21dd00b2 -->

```csharp
public Inno.Native.Sdl3.SDLKeymod Inno.Native.Sdl3.SDLContext.GetModState()
```

Get the current key modifier state for the keyboard.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetKeyboardState

**See also:** SDL_SetModState

**Returns:** an OR'd combination of the modifier keys for the keyboard.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13484).
