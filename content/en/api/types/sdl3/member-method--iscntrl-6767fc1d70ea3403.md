---
title: "SDLContext — Method: Iscntrl"
description: "Exact Method: Iscntrl contracts in SDLContext."
uid: api.inno.native.sdl3.6767fc1d70ea3403
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Iscntrl

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Iscntrl`

<a id="api-a37c17b37767d26b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Iscntrl(System.Int32) 7bda9b8bd9c9b266758d9a2e5aa271b99bb05955a2af2a6729f8593f455ad206 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.Iscntrl(int x)
```

Report if a character is a control character.
**WARNING**: Regardless of system locale, this will only treat ASCII values
0 through 0x1F, and 0x7F, as true.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16459).
