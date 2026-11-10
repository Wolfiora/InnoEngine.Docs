---
title: "SDLContext — Method: HasKeyboard"
description: "Exact Method: HasKeyboard contracts in SDLContext."
uid: api.inno.native.sdl3.06d24381f7b3fc3d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: HasKeyboard

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasKeyboard`

<a id="api-506322952a2638af"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.HasKeyboard 2541de27d0c70d609b8dcb2e72484828a7c5eab106278f17767ff66f1a05ab83 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.HasKeyboard()
```

Return whether a keyboard is currently connected.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetKeyboards

**Returns:** true if a keyboard is connected, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13151).
