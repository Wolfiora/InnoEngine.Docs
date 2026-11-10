---
title: "SDLContext.RawApi — Method: EnableScreenSaver"
description: "Exact Method: EnableScreenSaver contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b83c27a47f6bde36
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: EnableScreenSaver

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `EnableScreenSaver`

<a id="api-322a3ff816a337e3"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.EnableScreenSaver faa288bc4bfbe6eeb832117d8acf9ce5243d10a83f78c0b638a661b0130774f1 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.EnableScreenSaver()
```

Allow the screen to be blanked by a screen saver.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_DisableScreenSaver

**See also:** SDL_ScreenSaverEnabled

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47824).
