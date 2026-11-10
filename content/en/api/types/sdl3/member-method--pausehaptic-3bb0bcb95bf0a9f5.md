---
title: "SDLContext.RawApi — Method: PauseHaptic"
description: "Exact Method: PauseHaptic contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3bb0bcb95bf0a9f5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: PauseHaptic

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `PauseHaptic`

<a id="api-c225ff2c1a4ce698"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.PauseHaptic(Inno.Native.Sdl3.SDLHaptic*) b65303bd448f3728499c7fe46e7d030e1d4ab6370b42136f9d38ead69bee0244 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.PauseHaptic(Inno.Native.Sdl3.SDLHaptic* haptic)
```

Pause a haptic device.
Device must support the `SDL_HAPTIC_PAUSE` feature. Call SDL_ResumeHaptic()
to resume playback.
Do not modify the effects nor add new ones while the device is paused. That
can cause all sorts of weird errors.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ResumeHaptic

**Parameter `haptic`:** the SDL_Haptic device to pause.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19065).
