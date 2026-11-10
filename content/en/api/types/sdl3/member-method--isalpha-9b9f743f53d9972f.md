---
title: "SDLContext — Method: Isalpha"
description: "Exact Method: Isalpha contracts in SDLContext."
uid: api.inno.native.sdl3.9b9f743f53d9972f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Isalpha

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isalpha`

<a id="api-4673237f81fddf46"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Isalpha(System.Int32) 1fe3250a32e29cb6b22afc0055b835cde264c65c7d72729a3120fefe3926f6f0 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.Isalpha(int x)
```

Query if a character is alphabetic (a letter).
**WARNING**: Regardless of system locale, this will only treat ASCII values
for English 'a-z' and 'A-Z' as true.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16355).
