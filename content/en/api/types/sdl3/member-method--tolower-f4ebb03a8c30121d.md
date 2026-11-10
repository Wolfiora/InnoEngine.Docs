---
title: "SDLContext.RawApi — Method: Tolower"
description: "Exact Method: Tolower contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f4ebb03a8c30121d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Tolower

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Tolower`

<a id="api-9391029d76a4cdc0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Tolower(System.Int32) adab219a7107226689c1cbeaf954427957e9eacf09f196298813dadf61f28507 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Tolower(int x)
```

Convert low-ASCII English letters to lowercase.
**WARNING**: Regardless of system locale, this will only convert ASCII
values 'A' through 'Z' to lowercase.
This function returns the lowercase equivalent of `x`. If a character
cannot be converted, or is already lowercase, this function returns `x`.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** lowercase version of x, or x if no conversion available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L48517).
