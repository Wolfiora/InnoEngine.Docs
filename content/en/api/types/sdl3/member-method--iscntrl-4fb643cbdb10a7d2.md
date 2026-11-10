---
title: "SDL — Method: Iscntrl"
description: "Exact Method: Iscntrl contracts in SDL."
uid: api.inno.native.sdl3.4fb643cbdb10a7d2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Iscntrl

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Iscntrl`

<a id="api-a5830a2cecb6703d"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Iscntrl(System.Int32) 67f3b1d8a49e3ad329ba3acb1c02822cde9df2bf4e11cdefb090fd19488f3bf7 -->

```csharp
public static int Inno.Native.Sdl3.SDL.Iscntrl(int x)
```

Report if a character is a control character.
**WARNING**: Regardless of system locale, this will only treat ASCII values
0 through 0x1F, and 0x7F, as true.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L4198).
