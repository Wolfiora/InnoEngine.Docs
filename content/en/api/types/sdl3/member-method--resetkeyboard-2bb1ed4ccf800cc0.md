---
title: "SDLContext.RawApi — Method: ResetKeyboard"
description: "Exact Method: ResetKeyboard contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2bb1ed4ccf800cc0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ResetKeyboard

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ResetKeyboard`

<a id="api-9adb63e8fcabe0fe"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ResetKeyboard 37d947645ca158788c554bf287bcf1925d1a66e5f06919f45eb7488a948a6d1a -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.ResetKeyboard()
```

Clear the state of the keyboard.
This function will generate key up events for all pressed keys.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetKeyboardState


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34232).
