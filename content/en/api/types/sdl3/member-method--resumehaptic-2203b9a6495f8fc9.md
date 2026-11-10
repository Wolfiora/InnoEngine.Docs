---
title: "SDLContext.RawApi — Method: ResumeHaptic"
description: "Exact Method: ResumeHaptic contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2203b9a6495f8fc9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ResumeHaptic

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ResumeHaptic`

<a id="api-38cd706190c605c0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ResumeHaptic(Inno.Native.Sdl3.SDLHaptic*) 826c7b3a780597f264eb1d4867288ecad40ad161a80fff13ffdc25607c8d9165 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ResumeHaptic(Inno.Native.Sdl3.SDLHaptic* haptic)
```

Resume a haptic device.
Call to unpause after SDL_PauseHaptic().

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_PauseHaptic

**Parameter `haptic`:** the SDL_Haptic device to unpause.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L48878).
