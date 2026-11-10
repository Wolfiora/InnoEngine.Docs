---
title: "SDLContext — Method: HasLsx"
description: "Exact Method: HasLsx contracts in SDLContext."
uid: api.inno.native.sdl3.9bdfa6b380de9c81
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: HasLsx

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasLsx`

<a id="api-ab20b92ac662b8f4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.HasLsx 004d308fcd8abc73e2a2ef8d5d541d1699c779107cce0d7514f32cf3abf593c4 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.HasLsx()
```

Determine whether the CPU has LSX (LOONGARCH SIMD) features.
This always returns false on CPUs that aren't using LOONGARCH instruction
sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** true if the CPU has LOONGARCH LSX features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15288).
