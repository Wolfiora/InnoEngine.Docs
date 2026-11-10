---
title: "SDLContext.RawApi — Method: Isblank"
description: "Exact Method: Isblank contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2cd6d9f24b228912
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Isblank

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isblank`

<a id="api-f14dc1911ef7fc94"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Isblank(System.Int32) d7f5c13613a354353242f07cd0d06c66e932a5b0a7a938410fbaabd5fa545ca7 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Isblank(int x)
```

Report if a character is blank (a space or tab).
**WARNING**: Regardless of system locale, this will only treat ASCII values
0x20 (space) or 0x9 (tab) as true.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L51902).
