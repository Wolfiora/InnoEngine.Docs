---
title: "SDLContext — Method: Srand"
description: "Exact Method: Srand contracts in SDLContext."
uid: api.inno.native.sdl3.1b30cbbb5f56cabd
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Srand

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Srand`

<a id="api-418eb8eb21151200"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Srand(System.UInt64) d4859ee4f7e11d642ca975e50969f8badf3d00c43e8e540867cf1f19302f2c63 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.Srand(ulong seed)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15586).
