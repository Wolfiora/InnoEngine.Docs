---
title: "SDLContext.RawApi — Method: Isnanf"
description: "Exact Method: Isnanf contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6e4abf384e9c7c9d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Isnanf

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isnanf`

<a id="api-5315a7657cbd530c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Isnanf(System.Single) 2715a1acee160b1964d96e8e5dd774e89cc63cd5c0efc69903461d7dd84b5f2a -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Isnanf(float x)
```

Return whether the value is NaN.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_isnan

**Parameter `x`:** floating point value.

**Returns:** non-zero if the value is NaN, 0 otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L33052).
