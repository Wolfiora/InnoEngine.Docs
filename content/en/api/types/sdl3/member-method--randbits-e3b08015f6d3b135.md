---
title: "SDL — Method: RandBits"
description: "Exact Method: RandBits contracts in SDL."
uid: api.inno.native.sdl3.e3b08015f6d3b135
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: RandBits

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RandBits`

<a id="api-dd45dd1d2ea4e641"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.RandBits c57c1276c8e71ab989db057d635097ccf8a4d3a417cdaf323aa936f8abcab2fa -->

```csharp
public static uint Inno.Native.Sdl3.SDL.RandBits()
```

Generate 32 pseudo-random bits.
You likely want to use SDL_rand() to get a pseudo-random number instead.
There are no guarantees as to the quality of the random sequence produced,
and this should not be used for security (cryptography, passwords) or where
money is on the line (loot-boxes, casinos). There are many random number
libraries available with different characteristics and you should pick one
of those to meet any serious needs.

**Thread safety:** All calls should be made from a single thread

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_rand

**See also:** SDL_randf

**See also:** SDL_srand

**Returns:** a random value in the range of [0-SDL_MAX_UINT32].


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L4004).
