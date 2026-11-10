---
title: "SDLContext.RawApi — Method: Isinff"
description: "Exact Method: Isinff contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.89d70e06e483d082
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Isinff

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isinff`

<a id="api-87c6537f8b3fa91e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Isinff(System.Single) ae536758459fb737f7cd317b544304b157a1002e29d1c80a286b9d3f3d0222f0 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Isinff(float x)
```

Return whether the value is infinity.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_isinf

**Parameter `x`:** floating point value.

**Returns:** non-zero if the value is infinity, 0 otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18010).
