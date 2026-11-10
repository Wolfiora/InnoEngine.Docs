---
title: "SDL — Method: Isdigit"
description: "Exact Method: Isdigit contracts in SDL."
uid: api.inno.native.sdl3.6355ba72f311cad3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Isdigit

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isdigit`

<a id="api-f5a56e35266d8d4d"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Isdigit(System.Int32) 265cfba3b2f907879684bb1618d8fda564b605584ffd70e64835923f6207070c -->

```csharp
public static int Inno.Native.Sdl3.SDL.Isdigit(int x)
```

Report if a character is a numeric digit.
**WARNING**: Regardless of system locale, this will only treat ASCII values
'0' (0x30) through '9' (0x39), as true.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L839).
