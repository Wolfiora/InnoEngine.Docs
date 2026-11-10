---
title: "SDL — Method: CreateProperties"
description: "Exact Method: CreateProperties contracts in SDL."
uid: api.inno.native.sdl3.afa50dd0f7945afd
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: CreateProperties

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateProperties`

<a id="api-58e09b2b98ae5da2"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.CreateProperties 8706d29d507e47bfa563c18d0ab84ba944b0a018d4551f514e0d11ae43b01ded -->

```csharp
public static uint Inno.Native.Sdl3.SDL.CreateProperties()
```

Create a group of properties.
All properties are automatically destroyed when SDL_Quit() is called.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_DestroyProperties

**Returns:** an ID for a new group of properties, or 0 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3157).
