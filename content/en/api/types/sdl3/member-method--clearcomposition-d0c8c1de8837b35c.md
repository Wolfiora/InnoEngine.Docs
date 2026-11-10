---
title: "SDLContext.RawApi — Method: ClearComposition"
description: "Exact Method: ClearComposition contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d0c8c1de8837b35c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ClearComposition

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ClearComposition`

<a id="api-9d3adc69c4bd06ad"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ClearComposition(Inno.Native.Sdl3.SDLWindow*) e35a29b30d65ba29224af8061810e235c71a95b527a5e5fa6aa8626ed9ddab8b -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ClearComposition(Inno.Native.Sdl3.SDLWindow* window)
```

Dismiss the composition window/IME without disabling the subsystem.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_StartTextInput

**See also:** SDL_StopTextInput

**Parameter `window`:** the window to affect.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25084).
