---
title: "SDLContext.RawApi — Method: Isalpha"
description: "Exact Method: Isalpha contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5f7d2656d996486e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Isalpha

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isalpha`

<a id="api-7a03ab606ff4ba15"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Isalpha(System.Int32) 61c3c92e7ded5da1622c4218ffbc0fac2063c25e73003e8df660987f08dfa410 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Isalpha(int x)
```

Query if a character is alphabetic (a letter).
**WARNING**: Regardless of system locale, this will only treat ASCII values
for English 'a-z' and 'A-Z' as true.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L51434).
