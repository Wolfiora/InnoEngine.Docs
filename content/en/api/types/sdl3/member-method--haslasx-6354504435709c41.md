---
title: "SDLContext.RawApi — Method: HasLasx"
description: "Exact Method: HasLasx contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6354504435709c41
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HasLasx

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasLasx`

<a id="api-ea1f066b2980e5ed"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HasLasx 77b079ffdca6b971de9e0c9e716a746ca60fa79771bb49c0b74be5d458cc0528 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HasLasx()
```

Determine whether the CPU has LASX (LOONGARCH SIMD) features.
This always returns false on CPUs that aren't using LOONGARCH instruction
sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** true if the CPU has LOONGARCH LASX features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26024).
