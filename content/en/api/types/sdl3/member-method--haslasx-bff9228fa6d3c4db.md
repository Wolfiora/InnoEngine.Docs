---
title: "SDLContext — Method: HasLasx"
description: "Exact Method: HasLasx contracts in SDLContext."
uid: api.inno.native.sdl3.bff9228fa6d3c4db
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: HasLasx

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasLasx`

<a id="api-4ae083e3f3cf5b33"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.HasLasx dffb2c853f12eb9764681176d90cd804426fb04842db4ef8076248338a82220b -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.HasLasx()
```

Determine whether the CPU has LASX (LOONGARCH SIMD) features.
This always returns false on CPUs that aren't using LOONGARCH instruction
sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** true if the CPU has LOONGARCH LASX features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12768).
