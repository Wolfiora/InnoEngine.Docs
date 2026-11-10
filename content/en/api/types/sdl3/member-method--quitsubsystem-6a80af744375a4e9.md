---
title: "SDLContext — Method: QuitSubSystem"
description: "Exact Method: QuitSubSystem contracts in SDLContext."
uid: api.inno.native.sdl3.6a80af744375a4e9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: QuitSubSystem

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `QuitSubSystem`

<a id="api-44fc3407ce846f6a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.QuitSubSystem(Inno.Native.Sdl3.SDLInitFlags) d02e37f135adb1b60ed81a95ddb75e5f4178847f5f4b87850c1f67cc1c6ee32a -->

```csharp
public void Inno.Native.Sdl3.SDLContext.QuitSubSystem(Inno.Native.Sdl3.SDLInitFlags flags)
```

Shut down specific SDL subsystems.
You still need to call SDL_Quit() even if you close all open subsystems
with SDL_QuitSubSystem().

**Thread safety:** This function is not thread safe.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_InitSubSystem

**See also:** SDL_Quit

**Parameter `flags`:** any of the flags used by SDL_Init(); see SDL_Init for details.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12882).
