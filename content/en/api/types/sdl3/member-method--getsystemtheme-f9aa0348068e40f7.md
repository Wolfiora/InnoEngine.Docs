---
title: "SDL — Method: GetSystemTheme"
description: "Exact Method: GetSystemTheme contracts in SDL."
uid: api.inno.native.sdl3.f9aa0348068e40f7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetSystemTheme

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSystemTheme`

<a id="api-de79c0736e692910"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetSystemTheme 5214bb5910ab2d3ac8a4c5ea10fe8aa3d2d843cd3a0951ca5e75e91e943121d1 -->

```csharp
public static Inno.Native.Sdl3.SDLSystemTheme Inno.Native.Sdl3.SDL.GetSystemTheme()
```

Get the current system theme.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** the current system theme, light, dark, or unknown.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3054).
