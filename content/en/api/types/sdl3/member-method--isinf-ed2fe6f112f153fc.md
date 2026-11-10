---
title: "SDLContext.RawApi — Method: Isinf"
description: "Exact Method: Isinf contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ed2fe6f112f153fc
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Isinf

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isinf`

<a id="api-2e67e83d4c748134"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Isinf(System.Double) 85c5a6943da3a957d5f79d10bdd8cd6785db6eb5d05aac02274ae0c33f37b8a8 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Isinf(double x)
```

Return whether the value is infinity.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_isinff

**Parameter `x`:** double-precision floating point value.

**Returns:** non-zero if the value is infinity, 0 otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42512).
