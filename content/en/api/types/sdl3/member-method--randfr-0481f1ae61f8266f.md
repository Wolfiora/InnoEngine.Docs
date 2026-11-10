---
title: "SDLContext.RawApi — Method: RandfR"
description: "Exact Method: RandfR contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0481f1ae61f8266f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RandfR

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RandfR`

<a id="api-f26a5314e11f81c0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RandfR(System.UInt64*) 130beadea3d9f2eb6abd6b48e48c842df7dcde9a18742c4e42508d493a2d6bd2 -->

```csharp
public float Inno.Native.Sdl3.SDLContext.RawApi.RandfR(ulong* state)
```

Generate a uniform pseudo-random floating point number less than 1.0
If you want reproducible output, be sure to initialize with SDL_srand()
first.
There are no guarantees as to the quality of the random sequence produced,
and this should not be used for security (cryptography, passwords) or where
money is on the line (loot-boxes, casinos). There are many random number
libraries available with different characteristics and you should pick one
of those to meet any serious needs.

**Thread safety:** This function is thread-safe, as long as the state pointer
isn't shared between threads.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_rand_bits_r

**See also:** SDL_rand_r

**See also:** SDL_randf

**Parameter `state`:** a pointer to the current random number state, this may not be
NULL.

**Returns:** a random value in the range of [0.0, 1.0).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25679).
