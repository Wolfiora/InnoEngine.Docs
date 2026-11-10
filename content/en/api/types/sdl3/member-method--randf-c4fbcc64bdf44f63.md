---
title: "SDLContext — Method: Randf"
description: "Exact Method: Randf contracts in SDLContext."
uid: api.inno.native.sdl3.c4fbcc64bdf44f63
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Randf

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Randf`

<a id="api-8a2b6ac1f0b60d04"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Randf c89cec88b9626e2abb754eb0b298b9868430a4223b9c36385a8992a918fa7227 -->

```csharp
public float Inno.Native.Sdl3.SDLContext.Randf()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16377).
