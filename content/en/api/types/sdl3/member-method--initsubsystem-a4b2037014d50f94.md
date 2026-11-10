---
title: "SDLContext — Method: InitSubSystem"
description: "Exact Method: InitSubSystem contracts in SDLContext."
uid: api.inno.native.sdl3.a4b2037014d50f94
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: InitSubSystem

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `InitSubSystem`

<a id="api-4f2525d4a6d5b261"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.InitSubSystem(Inno.Native.Sdl3.SDLInitFlags) 7e18736cff1c7d0873664beed15031818730073e328eea9e7a26b0927d292775 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.InitSubSystem(Inno.Native.Sdl3.SDLInitFlags flags)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15438).
