---
title: "SDLContext.RawApi — Method: DestroyHapticEffect"
description: "Exact Method: DestroyHapticEffect contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.77b60e76eec28546
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DestroyHapticEffect

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DestroyHapticEffect`

<a id="api-23cef66954879393"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DestroyHapticEffect(Inno.Native.Sdl3.SDLHaptic*,System.Int32) 29ee71a4d029125917308306482be46b03e11cbe5691e63f9d5b5c3977383c7b -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DestroyHapticEffect(Inno.Native.Sdl3.SDLHaptic* haptic, int effect)
```

Destroy a haptic effect on the device.
This will stop the effect if it's running. Effects are automatically
destroyed when the device is closed.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateHapticEffect

**Parameter `haptic`:** the SDL_Haptic device to destroy the effect on.

**Parameter `effect`:** the ID of the haptic effect to destroy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L48935).
