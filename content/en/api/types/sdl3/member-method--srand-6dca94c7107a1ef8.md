---
title: "SDL — Method: Srand"
description: "Exact Method: Srand contracts in SDL."
uid: api.inno.native.sdl3.6dca94c7107a1ef8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Srand

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Srand`

<a id="api-8917fa53c023c4cb"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Srand(System.UInt64) 89e384cc607c89ed2a7eb6c7db5adbbd3d95eff791b00597269852f63d10ac44 -->

```csharp
public static void Inno.Native.Sdl3.SDL.Srand(ulong seed)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3490).
