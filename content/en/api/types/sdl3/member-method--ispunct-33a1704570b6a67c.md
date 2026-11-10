---
title: "SDLContext.RawApi — Method: Ispunct"
description: "Exact Method: Ispunct contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.33a1704570b6a67c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Ispunct

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Ispunct`

<a id="api-5e339d084b227cab"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Ispunct(System.Int32) 1caff7edba3a3cdd4f53a922f68311d1bd641cde2753cd02923101c8b78d5365 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Ispunct(int x)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40360).
