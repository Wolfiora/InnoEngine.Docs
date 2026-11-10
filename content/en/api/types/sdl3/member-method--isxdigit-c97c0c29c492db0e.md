---
title: "SDLContext — Method: Isxdigit"
description: "Exact Method: Isxdigit contracts in SDLContext."
uid: api.inno.native.sdl3.c97c0c29c492db0e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Isxdigit

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isxdigit`

<a id="api-12c69456589be7d3"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Isxdigit(System.Int32) 73d3abc6fe6ee24a43f94d98b53266fc47c739859b923d6fae5d0e59b47d2d53 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.Isxdigit(int x)
```

Report if a character is a hexadecimal digit.
**WARNING**: Regardless of system locale, this will only treat ASCII values
'A' through 'F', 'a' through 'f', and '0' through '9', as true.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15636).
