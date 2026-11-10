---
title: "SDLContext.RawApi — Method: HasNeon"
description: "Exact Method: HasNeon contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.df25230dcb15092e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HasNeon

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasNeon`

<a id="api-87a077d54cc31469"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HasNeon a6effd3b65885ecc58148d738a22b1d5fb33cb931b6450b698a6b528bb3722fb -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HasNeon()
```

Determine whether the CPU has NEON (ARM SIMD) features.
This always returns false on CPUs that aren't using ARM instruction sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** true if the CPU has ARM NEON features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20723).
