---
title: "SDLContext — Method: GetSystemTheme"
description: "Exact Method: GetSystemTheme contracts in SDLContext."
uid: api.inno.native.sdl3.6f32262e9f506fe8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetSystemTheme

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSystemTheme`

<a id="api-2a0350a06eda69a2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetSystemTheme b766509fbf896ff122e9782cdd6b727f2eceaf511b7a9855e7cfc9103f8f605c -->

```csharp
public Inno.Native.Sdl3.SDLSystemTheme Inno.Native.Sdl3.SDLContext.GetSystemTheme()
```

Get the current system theme.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** the current system theme, light, dark, or unknown.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15054).
