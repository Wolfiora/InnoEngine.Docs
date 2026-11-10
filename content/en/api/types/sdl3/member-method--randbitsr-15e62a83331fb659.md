---
title: "SDLContext.RawApi — Method: RandBitsR"
description: "Exact Method: RandBitsR contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.15e62a83331fb659
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RandBitsR

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RandBitsR`

<a id="api-c461eb4f40d22c65"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RandBitsR(System.UInt64*) 98ea0108c7ea3e966d8955eeb77b6b61daa374d7264615f206b0dde4034eef19 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.RandBitsR(ulong* state)
```

Generate 32 pseudo-random bits.
You likely want to use SDL_rand_r() to get a pseudo-random number instead.
There are no guarantees as to the quality of the random sequence produced,
and this should not be used for security (cryptography, passwords) or where
money is on the line (loot-boxes, casinos). There are many random number
libraries available with different characteristics and you should pick one
of those to meet any serious needs.

**Thread safety:** This function is thread-safe, as long as the state pointer
isn't shared between threads.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_rand_r

**See also:** SDL_randf_r

**Parameter `state`:** a pointer to the current random number state, this may not be
NULL.

**Returns:** a random value in the range of [0-SDL_MAX_UINT32].


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17485).
