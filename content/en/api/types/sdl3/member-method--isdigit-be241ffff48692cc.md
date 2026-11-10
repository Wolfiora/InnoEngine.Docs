---
title: "SDLContext.RawApi — Method: Isdigit"
description: "Exact Method: Isdigit contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.be241ffff48692cc
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Isdigit

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isdigit`

<a id="api-df9c027b9ca8b311"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Isdigit(System.Int32) 0fb10b948eb8809de7f8a6b8cea75c000fb9cb2f4b4facf4c8f338cc2b5db27c -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Isdigit(int x)
```

Report if a character is a numeric digit.
**WARNING**: Regardless of system locale, this will only treat ASCII values
'0' (0x30) through '9' (0x39), as true.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22816).
