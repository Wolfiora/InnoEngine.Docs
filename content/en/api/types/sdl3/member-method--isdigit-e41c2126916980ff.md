---
title: "SDLContext — Method: Isdigit"
description: "Exact Method: Isdigit contracts in SDLContext."
uid: api.inno.native.sdl3.e41c2126916980ff
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Isdigit

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isdigit`

<a id="api-d04586f5110e434d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Isdigit(System.Int32) 2b65a32a2cff4c3c83ba3e7e48f94b27c76b456a8af29550db96f602bee6c914 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.Isdigit(int x)
```

Report if a character is a numeric digit.
**WARNING**: Regardless of system locale, this will only treat ASCII values
'0' (0x30) through '9' (0x39), as true.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12368).
