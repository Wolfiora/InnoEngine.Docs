---
title: "SDLContext.RawApi — Method: RandR"
description: "Exact Method: RandR contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8399891a817f1601
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RandR

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RandR`

<a id="api-12dc165977115a1f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RandR(System.UInt64*,System.Int32) 71f901afbf983a4e99937615063462d5571f84b142a1cbf3edd7fb4213c08dba -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.RandR(ulong* state, int n)
```

Generate a pseudo-random number less than n for positive n
The method used is faster and of better quality than `rand() % n`. Odds are
roughly 99.9% even for n = 1 million. Evenness is better for smaller n, and
much worse as n gets bigger.
Example: to simulate a d6 use `SDL_rand_r(state, 6) + 1` The +1 converts
0..5 to 1..6
If you want to generate a pseudo-random number in the full range of Sint32,
you should use: (Sint32)SDL_rand_bits_r(state)
There are no guarantees as to the quality of the random sequence produced,
and this should not be used for security (cryptography, passwords) or where
money is on the line (loot-boxes, casinos). There are many random number
libraries available with different characteristics and you should pick one
of those to meet any serious needs.

**Thread safety:** This function is thread-safe, as long as the state pointer
isn't shared between threads.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_rand

**See also:** SDL_rand_bits_r

**See also:** SDL_randf_r

**Parameter `state`:** a pointer to the current random number state, this may not be
NULL.

**Parameter `n`:** the number of possible outcomes. n must be positive.

**Returns:** a random value in the range of [0 .. n-1].


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36660).
