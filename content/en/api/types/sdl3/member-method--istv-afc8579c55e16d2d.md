---
title: "SDL — Method: IsTv"
description: "Exact Method: IsTv contracts in SDL."
uid: api.inno.native.sdl3.afc8579c55e16d2d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: IsTv

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsTv`

<a id="api-1222ded7f68d09bf"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.IsTv 440169f5bf16b9be917103d9614d89fcbd47d35f400427128fc810ab8e1bf99c -->

```csharp
public static bool Inno.Native.Sdl3.SDL.IsTv()
```

Query if the current device is a TV.
If SDL can't determine this, it will return false.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** true if the device is a TV, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L191).
