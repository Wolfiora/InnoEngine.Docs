---
title: "SDL — Method: Isblank"
description: "Exact Method: Isblank contracts in SDL."
uid: api.inno.native.sdl3.f7ced80150890b95
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Isblank

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isblank`

<a id="api-75349fda17b84464"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Isblank(System.Int32) ec4f3108135a94ca461feff531fbf7201a12fed772d2048b47e07c05ee5c6295 -->

```csharp
public static int Inno.Native.Sdl3.SDL.Isblank(int x)
```

Report if a character is blank (a space or tab).
**WARNING**: Regardless of system locale, this will only treat ASCII values
0x20 (space) or 0x9 (tab) as true.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L4184).
