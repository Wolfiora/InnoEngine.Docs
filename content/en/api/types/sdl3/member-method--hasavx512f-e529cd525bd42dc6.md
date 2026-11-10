---
title: "SDLContext.RawApi — Method: HasAvx512F"
description: "Exact Method: HasAvx512F contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e529cd525bd42dc6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HasAvx512F

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasAvx512F`

<a id="api-acb2478471ab7d3d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HasAvx512F 47b2da23408e7e23a4eb969915a7df66c289dd526173fba4cf2e1f9d4958311e -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HasAvx512F()
```

Determine whether the CPU has AVX-512F (foundation) features.
This always returns false on CPUs that aren't using Intel instruction sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasAVX

**See also:** SDL_HasAVX2

**Returns:** true if the CPU has AVX-512F features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16720).
