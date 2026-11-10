---
title: "SDL — Method: ReloadGamepadMappings"
description: "Exact Method: ReloadGamepadMappings contracts in SDL."
uid: api.inno.native.sdl3.b576f8f779765181
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: ReloadGamepadMappings

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ReloadGamepadMappings`

<a id="api-843fa7e1e54eecfd"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.ReloadGamepadMappings 94b45d1658283d6b365cb588d496ee493d008b13dc364a61eebd539ed68d0efa -->

```csharp
public static bool Inno.Native.Sdl3.SDL.ReloadGamepadMappings()
```

Reinitialize the SDL mapping database to its initial state.
This will generate gamepad events as needed if device mappings change.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1926).
