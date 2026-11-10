---
title: "SDL — Method: Isinff"
description: "Exact Method: Isinff contracts in SDL."
uid: api.inno.native.sdl3.dfd6207d8c18e797
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Isinff

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isinff`

<a id="api-f69c4fc893b23656"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Isinff(System.Single) e06c6e63551cfbf8dba3a32021f089fc3835de2995f4f10000f031676f96a8cb -->

```csharp
public static int Inno.Native.Sdl3.SDL.Isinff(float x)
```

Return whether the value is infinity.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_isinf

**Parameter `x`:** floating point value.

**Returns:** non-zero if the value is infinity, 0 otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L223).
