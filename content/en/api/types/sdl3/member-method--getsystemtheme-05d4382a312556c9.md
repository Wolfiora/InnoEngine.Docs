---
title: "SDLContext.RawApi — Method: GetSystemTheme"
description: "Exact Method: GetSystemTheme contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.05d4382a312556c9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetSystemTheme

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSystemTheme`

<a id="api-ba47f675374a9819"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetSystemTheme 43ffe24fc2ce6cd2a8f89b8211ef151c644e1279bbb9cbd863705dda6fbbc22b -->

```csharp
public Inno.Native.Sdl3.SDLSystemTheme Inno.Native.Sdl3.SDLContext.RawApi.GetSystemTheme()
```

Get the current system theme.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** the current system theme, light, dark, or unknown.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40929).
