---
title: "SDLContext — Method: Ispunct"
description: "Exact Method: Ispunct contracts in SDLContext."
uid: api.inno.native.sdl3.65ba4c33faa306d8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Ispunct

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Ispunct`

<a id="api-c3e1977f58353639"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Ispunct(System.Int32) 3eb7d449cb5acf6a4de425dcd43256434bfc374156d9d66157fb9033b8310395 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.Ispunct(int x)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15041).
