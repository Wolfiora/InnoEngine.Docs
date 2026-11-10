---
title: "SDL — Method: DestroyProperties"
description: "Exact Method: DestroyProperties contracts in SDL."
uid: api.inno.native.sdl3.28dd32474478aa69
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: DestroyProperties

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DestroyProperties`

<a id="api-8031114d2f1eed2d"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.DestroyProperties(System.UInt32) 48ea8953bc7e145c6007e33fff457688a02053c1c710c42ad7771c97d1f6b1b4 -->

```csharp
public static void Inno.Native.Sdl3.SDL.DestroyProperties(uint props)
```

Destroy a group of properties.
All properties are deleted and their cleanup functions will be called, if
any.

**Thread safety:** This function should not be called while these properties are
locked or other threads might be setting or getting values
from these properties.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateProperties

**Parameter `props`:** the properties to destroy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2497).
