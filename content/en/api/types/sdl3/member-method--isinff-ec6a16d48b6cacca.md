---
title: "SDLContext — Method: Isinff"
description: "Exact Method: Isinff contracts in SDLContext."
uid: api.inno.native.sdl3.ec6a16d48b6cacca
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Isinff

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isinff`

<a id="api-31bdad309f4199cf"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Isinff(System.Single) 2c9fa69bc8b27a80be99ea9119a0f157993ca790c478552b747d04bee63380ec -->

```csharp
public int Inno.Native.Sdl3.SDLContext.Isinff(float x)
```

Return whether the value is infinity.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_isinf

**Parameter `x`:** floating point value.

**Returns:** non-zero if the value is infinity, 0 otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L11607).
