---
title: "SDLContext.RawApi — Method: GetHapticName"
description: "Exact Method: GetHapticName contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9203a1a33d54034b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetHapticName

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetHapticName`

<a id="api-4fef86a052e182a5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetHapticName(Inno.Native.Sdl3.SDLHaptic*) 5e2e2aa2e1576d1fcc819eb9b0426ef850138dcbe14d273203afb720daffdab3 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetHapticName(Inno.Native.Sdl3.SDLHaptic* haptic)
```

Get the implementation dependent name of a haptic device.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetHapticNameForID

**Parameter `haptic`:** the SDL_Haptic obtained from SDL_OpenJoystick().

**Returns:** the name of the selected haptic device. If no name can be found,
this function returns NULL; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17540).
