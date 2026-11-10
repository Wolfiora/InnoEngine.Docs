---
title: "SDLContext.RawApi — Method: HasArmsimd"
description: "Exact Method: HasArmsimd contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.dfef36e7e0213867
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HasArmsimd

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasArmsimd`

<a id="api-0671a4d90e936806"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HasArmsimd 12551806f47c863dae8b3425a9c4b0d19801a29da872196125a395358a286438 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HasArmsimd()
```

Determine whether the CPU has ARM SIMD (ARMv6) features.
This is different from ARM NEON, which is a different instruction set.
This always returns false on CPUs that aren't using ARM instruction sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasNEON

**Returns:** true if the CPU has ARM SIMD features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50213).
