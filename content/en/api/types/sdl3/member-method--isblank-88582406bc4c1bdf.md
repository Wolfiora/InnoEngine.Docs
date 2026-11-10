---
title: "SDLContext — Method: Isblank"
description: "Exact Method: Isblank contracts in SDLContext."
uid: api.inno.native.sdl3.88582406bc4c1bdf
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Isblank

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isblank`

<a id="api-e0c063db4ddea7c2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Isblank(System.Int32) 44006151376498aa0e3695a64de8872af891876351670ac09d3e33558cafebf8 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.Isblank(int x)
```

Report if a character is blank (a space or tab).
**WARNING**: Regardless of system locale, this will only treat ASCII values
0x20 (space) or 0x9 (tab) as true.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16441).
