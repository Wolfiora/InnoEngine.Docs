---
title: "SDLContext — Method: ReloadGamepadMappings"
description: "Exact Method: ReloadGamepadMappings contracts in SDLContext."
uid: api.inno.native.sdl3.5b4ddbf45c90c65b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: ReloadGamepadMappings

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ReloadGamepadMappings`

<a id="api-8a8429352b5c79ba"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.ReloadGamepadMappings ced312941bb318c237e93a9e1c890657264c0d6dacaa933da8b5893bd5240368 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.ReloadGamepadMappings()
```

Reinitialize the SDL mapping database to its initial state.
This will generate gamepad events as needed if device mappings change.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13696).
