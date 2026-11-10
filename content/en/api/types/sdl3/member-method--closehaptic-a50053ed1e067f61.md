---
title: "SDLContext.RawApi — Method: CloseHaptic"
description: "Exact Method: CloseHaptic contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a50053ed1e067f61
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CloseHaptic

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CloseHaptic`

<a id="api-360a55eee7386fa3"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CloseHaptic(Inno.Native.Sdl3.SDLHaptic*) 254fdc7e70f182b00aac9822cc34f88312d6df937de27acb2fef2ceb47ed84ab -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.CloseHaptic(Inno.Native.Sdl3.SDLHaptic* haptic)
```

Close a haptic device previously opened with SDL_OpenHaptic().

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_OpenHaptic

**Parameter `haptic`:** the SDL_Haptic device to close.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42823).
