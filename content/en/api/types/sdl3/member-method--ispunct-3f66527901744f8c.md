---
title: "SDL — Method: Ispunct"
description: "Exact Method: Ispunct contracts in SDL."
uid: api.inno.native.sdl3.3f66527901744f8c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Ispunct

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Ispunct`

<a id="api-caffa60f75287840"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Ispunct(System.Int32) 55dc6fcc59eac96bd1a618003f497f7b283f15f77a1a77729a4899b366c6d9cf -->

```csharp
public static int Inno.Native.Sdl3.SDL.Ispunct(int x)
```

Report if a character is a punctuation mark.
**WARNING**: Regardless of system locale, this is equivalent to
`((SDL_isgraph(x))
&
&
(!SDL_isalnum(x)))`.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_isgraph

**See also:** SDL_isalnum

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3045).
