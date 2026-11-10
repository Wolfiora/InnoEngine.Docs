---
title: "SDLContext.RawApi — Method: OpenHaptic"
description: "Exact Method: OpenHaptic contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9b086b77abf935d6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: OpenHaptic

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OpenHaptic`

<a id="api-be60741ae07cc05d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.OpenHaptic(System.UInt32) 7899fade3a9007729a6362b3c76b22bf197bf250620a2458e09a006f24c74862 -->

```csharp
public Inno.Native.Sdl3.SDLHaptic* Inno.Native.Sdl3.SDLContext.RawApi.OpenHaptic(uint instance_id)
```

Open a haptic device for use.
The index passed as an argument refers to the N'th haptic device on this
system.
When opening a haptic device, its gain will be set to maximum and
autocenter will be disabled. To modify these values use SDL_SetHapticGain()
and SDL_SetHapticAutocenter().

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CloseHaptic

**See also:** SDL_GetHaptics

**See also:** SDL_OpenHapticFromJoystick

**See also:** SDL_OpenHapticFromMouse

**See also:** SDL_SetHapticAutocenter

**See also:** SDL_SetHapticGain

**Parameter `instance_id`:** the haptic device instance ID.

**Returns:** the device identifier or NULL on failure; call SDL_GetError() for
more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21120).
