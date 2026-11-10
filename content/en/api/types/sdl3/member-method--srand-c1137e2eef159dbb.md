---
title: "SDLContext.RawApi — Method: Srand"
description: "Exact Method: Srand contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c1137e2eef159dbb
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Srand

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Srand`

<a id="api-1771b33bf7d13942"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Srand(System.UInt64) 8e3358d500871eb2eecbb3cb7c20749029d1668aec5263dfd15d781cff347db7 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.Srand(ulong seed)
```

Seeds the pseudo-random number generator.
Reusing the seed number will cause SDL_rand() to repeat the same stream of
'random' numbers.

**Thread safety:** This should be called on the same thread that calls
SDL_rand()

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_rand

**See also:** SDL_rand_bits

**See also:** SDL_randf

**Parameter `seed`:** the value to use as a random number seed, or 0 to use
SDL_GetPerformanceCounter().


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45046).
