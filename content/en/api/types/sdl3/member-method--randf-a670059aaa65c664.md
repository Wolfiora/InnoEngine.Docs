---
title: "SDL — Method: Randf"
description: "Exact Method: Randf contracts in SDL."
uid: api.inno.native.sdl3.a670059aaa65c664
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Randf

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Randf`

<a id="api-26b57b8337cb2688"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Randf eb4fd4ba721e4eaa82fbe3808444616acc7434af90800f015d5ffed5a789dc91 -->

```csharp
public static float Inno.Native.Sdl3.SDL.Randf()
```

Generate a uniform pseudo-random floating point number less than 1.0
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

**See also:** SDL_rand

**Returns:** a random value in the range of [0.0, 1.0).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L4128).
