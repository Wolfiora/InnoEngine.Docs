---
title: "SDL — Method: GetGlobalProperties"
description: "Exact Method: GetGlobalProperties contracts in SDL."
uid: api.inno.native.sdl3.23de15d5d4472e29
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetGlobalProperties

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGlobalProperties`

<a id="api-b47309ec11b69dfb"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetGlobalProperties f39c7d61ccedb4bd8336d15dc4cb99d2052616e08ff14f6de69c5deba6743914 -->

```csharp
public static uint Inno.Native.Sdl3.SDL.GetGlobalProperties()
```

Get the global SDL properties.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** a valid property ID on success or 0 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L998).
