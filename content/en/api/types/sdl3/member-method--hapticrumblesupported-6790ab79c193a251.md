---
title: "SDLContext.RawApi — Method: HapticRumbleSupported"
description: "Exact Method: HapticRumbleSupported contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6790ab79c193a251
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HapticRumbleSupported

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HapticRumbleSupported`

<a id="api-4ab8391fa1c717c9"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HapticRumbleSupported(Inno.Native.Sdl3.SDLHaptic*) d29728deebd0767a6a122c409f78a00bafa94fe5e6158ba48e4e8cb6ecbe38b9 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HapticRumbleSupported(Inno.Native.Sdl3.SDLHaptic* haptic)
```

Check whether rumble is supported on a haptic device.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_InitHapticRumble

**Parameter `haptic`:** haptic device to check for rumble support.

**Returns:** true if the effect is supported or false if it isn't.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L48274).
