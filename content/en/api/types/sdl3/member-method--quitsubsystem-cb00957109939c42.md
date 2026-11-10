---
title: "SDL — Method: QuitSubSystem"
description: "Exact Method: QuitSubSystem contracts in SDL."
uid: api.inno.native.sdl3.cb00957109939c42
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: QuitSubSystem

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `QuitSubSystem`

<a id="api-1cf871cfc14de885"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.QuitSubSystem(Inno.Native.Sdl3.SDLInitFlags) a5c0ccedbbd0701d5f93491a476b398aef5c570887caf0150a8c7a8f4adf6b2b -->

```csharp
public static void Inno.Native.Sdl3.SDL.QuitSubSystem(Inno.Native.Sdl3.SDLInitFlags flags)
```

Shut down specific SDL subsystems.
You still need to call SDL_Quit() even if you close all open subsystems
with SDL_QuitSubSystem().

**Thread safety:** This function is not thread safe.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_InitSubSystem

**See also:** SDL_Quit

**Parameter `flags`:** any of the flags used by SDL_Init(); see SDL_Init for details.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1257).
