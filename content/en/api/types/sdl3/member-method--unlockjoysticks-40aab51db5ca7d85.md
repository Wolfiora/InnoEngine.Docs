---
title: "SDLContext — Method: UnlockJoysticks"
description: "Exact Method: UnlockJoysticks contracts in SDLContext."
uid: api.inno.native.sdl3.40aab51db5ca7d85
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: UnlockJoysticks

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UnlockJoysticks`

<a id="api-f6962ca3a2749356"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.UnlockJoysticks b15cc4d869a1ed2cec56a4fd3f9f73c0b52bd39f911f1091e6aee7fcc28501d5 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.UnlockJoysticks()
```

Unlocking for atomic access to the joystick API.

**Thread safety:** This should be called from the same thread that called
SDL_LockJoysticks().

**Upstream availability:** This function is available since SDL 3.2.0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14937).
