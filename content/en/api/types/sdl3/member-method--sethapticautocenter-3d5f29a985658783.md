---
title: "SDLContext.RawApi — Method: SetHapticAutocenter"
description: "Exact Method: SetHapticAutocenter contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3d5f29a985658783
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetHapticAutocenter

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetHapticAutocenter`

<a id="api-5bd0f133f22726a4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetHapticAutocenter(Inno.Native.Sdl3.SDLHaptic*,System.Int32) 575b81fed051c759737b02532e714c8668cb97745a9f3f87cc3e9e5736f693a9 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetHapticAutocenter(Inno.Native.Sdl3.SDLHaptic* haptic, int autocenter)
```

Set the global autocenter of the device.
Autocenter should be between 0 and 100. Setting it to 0 will disable
autocentering.
Device must support the SDL_HAPTIC_AUTOCENTER feature.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetHapticFeatures

**Parameter `haptic`:** the SDL_Haptic device to set autocentering on.

**Parameter `autocenter`:** value to set autocenter to (0-100).

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47697).
