---
title: "SDLContext.RawApi — Method: RandBits"
description: "Exact Method: RandBits contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.cfb935183aa04f91
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RandBits

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RandBits`

<a id="api-16ecb8dc9c6de279"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RandBits edf6f4588fa493b7036b1941ae79d6e1f3e8f58755be42643420b2528204e223 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.RandBits()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50610).
