---
title: "SDLContext.RawApi — Method: InitSubSystem"
description: "Exact Method: InitSubSystem contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.23c1282e214cc484
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: InitSubSystem

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `InitSubSystem`

<a id="api-8be5401f9ff906e6"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.InitSubSystem(System.UInt32) a2db09aa61e0eef332eff022c6985572414e149bb89d17289e6e1619ef5c90a3 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.InitSubSystem(uint flags)
```

Compatibility function to initialize the SDL library.
This function and SDL_Init() are interchangeable.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_Init

**See also:** SDL_Quit

**See also:** SDL_QuitSubSystem

**Parameter `flags`:** any of the flags used by SDL_Init(); see SDL_Init for details.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44122).
