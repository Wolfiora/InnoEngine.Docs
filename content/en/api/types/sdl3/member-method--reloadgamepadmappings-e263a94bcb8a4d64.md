---
title: "SDLContext.RawApi — Method: ReloadGamepadMappings"
description: "Exact Method: ReloadGamepadMappings contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e263a94bcb8a4d64
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ReloadGamepadMappings

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ReloadGamepadMappings`

<a id="api-88a21c0b06094d93"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ReloadGamepadMappings 8c1adf7801a843be3e53fe5be7c93a7952ae76ab6710ecc4d59f4abbad5e9446 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ReloadGamepadMappings()
```

Reinitialize the SDL mapping database to its initial state.
This will generate gamepad events as needed if device mappings change.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L33007).
