---
title: "SDLContext.RawApi — Method: GetModState"
description: "Exact Method: GetModState contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2881707ce00e52a0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetModState

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetModState`

<a id="api-dcfa1eb3e3d69d8c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetModState d27553362358a9bc5c48cd9d6db130602e399ab97f82b7089e97b26f98526ea9 -->

```csharp
public ushort Inno.Native.Sdl3.SDLContext.RawApi.GetModState()
```

Get the current key modifier state for the keyboard.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetKeyboardState

**See also:** SDL_SetModState

**Returns:** an OR'd combination of the modifier keys for the keyboard.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31323).
