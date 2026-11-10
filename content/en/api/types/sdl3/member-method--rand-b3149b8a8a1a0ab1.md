---
title: "SDLContext.RawApi — Method: Rand"
description: "Exact Method: Rand contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b3149b8a8a1a0ab1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Rand

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Rand`

<a id="api-9fa256ae5b562819"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Rand(System.Int32) 1aac753da28e3fe35d47914cfbcbb4b80eb1cd991f62c05f870d4ff91a61b7c3 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Rand(int n)
```

Generate a pseudo-random number less than n for positive n
The method used is faster and of better quality than `rand() % n`. Odds are
roughly 99.9% even for n = 1 million. Evenness is better for smaller n, and
much worse as n gets bigger.
Example: to simulate a d6 use `SDL_rand(6) + 1` The +1 converts 0..5 to
1..6
If you want to generate a pseudo-random number in the full range of Sint32,
you should use: (Sint32)SDL_rand_bits()
If you want reproducible output, be sure to initialize with SDL_srand()
first.
There are no guarantees as to the quality of the random sequence produced,
and this should not be used for security (cryptography, passwords) or where
money is on the line (loot-boxes, casinos). There are many random number
libraries available with different characteristics and you should pick one
of those to meet any serious needs.

**Thread safety:** All calls should be made from a single thread

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_srand

**See also:** SDL_randf

**Parameter `n`:** the number of possible outcomes. n must be positive.

**Returns:** a random value in the range of [0 .. n-1].


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47369).
