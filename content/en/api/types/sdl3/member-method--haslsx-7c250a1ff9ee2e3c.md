---
title: "SDLContext.RawApi — Method: HasLsx"
description: "Exact Method: HasLsx contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7c250a1ff9ee2e3c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HasLsx

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasLsx`

<a id="api-f5f4b1f3295f37ce"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HasLsx 1bac73fbccb1bf7df7901d53e1e0e6326cc5ee972a2f6e3769b717cf81941e8c -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HasLsx()
```

Determine whether the CPU has LSX (LOONGARCH SIMD) features.
This always returns false on CPUs that aren't using LOONGARCH instruction
sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** true if the CPU has LOONGARCH LSX features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42914).
