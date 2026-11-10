---
title: "SDLContext.RawApi — Method: StopHapticEffects"
description: "Exact Method: StopHapticEffects contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.70c26396ecb24335
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: StopHapticEffects

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `StopHapticEffects`

<a id="api-9468484c469ad12a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.StopHapticEffects(Inno.Native.Sdl3.SDLHaptic*) 4839ff7bcd1236fdadc513a1001c3c14fffb8bb6f836f2b893c60e8fff6e77e4 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.StopHapticEffects(Inno.Native.Sdl3.SDLHaptic* haptic)
```

Stop all the currently playing effects on a haptic device.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_RunHapticEffect

**See also:** SDL_StopHapticEffect

**Parameter `haptic`:** the SDL_Haptic device to stop.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34911).
