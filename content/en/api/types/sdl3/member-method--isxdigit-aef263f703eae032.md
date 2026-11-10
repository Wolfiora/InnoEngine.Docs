---
title: "SDL — Method: Isxdigit"
description: "Exact Method: Isxdigit contracts in SDL."
uid: api.inno.native.sdl3.aef263f703eae032
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Isxdigit

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isxdigit`

<a id="api-76f475819cdb248f"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Isxdigit(System.Int32) 9d457271bddf24fb4cda2782b1670ed327c9a59b0f8d71120d9bb6ae46ab8d6c -->

```csharp
public static int Inno.Native.Sdl3.SDL.Isxdigit(int x)
```

Report if a character is a hexadecimal digit.
**WARNING**: Regardless of system locale, this will only treat ASCII values
'A' through 'F', 'a' through 'f', and '0' through '9', as true.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3528).
