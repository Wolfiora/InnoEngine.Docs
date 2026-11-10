---
title: "SDLContext.RawApi — Method: Isgraph"
description: "Exact Method: Isgraph contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b773a3713d95fb4e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Isgraph

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isgraph`

<a id="api-3c43ba558ee20f64"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Isgraph(System.Int32) ec3c75cb09ab654d38563b7d55c105bd074d5c55eab832e62d56a383fd51b2e1 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Isgraph(int x)
```

Report if a character is any "printable" except space.
Be advised that "printable" has a definition that goes back to text
terminals from the dawn of computing, making this a sort of special case
function that is not suitable for Unicode (or most any) text management.
**WARNING**: Regardless of system locale, this is equivalent to
`(SDL_isprint(x))
&
&
((x) != ' ')`.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_isprint

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L35645).
