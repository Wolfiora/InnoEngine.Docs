---
title: "SDL — Method: InitSubSystem"
description: "Exact Method: InitSubSystem contracts in SDL."
uid: api.inno.native.sdl3.ccbfea25098bc554
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: InitSubSystem

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `InitSubSystem`

<a id="api-0cd8b537ee0189cc"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.InitSubSystem(Inno.Native.Sdl3.SDLInitFlags) a62f195f98eb1963e322a3aa9a5ee3e6fa20081d7648e08e4910955811e45039 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.InitSubSystem(Inno.Native.Sdl3.SDLInitFlags flags)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3366).
