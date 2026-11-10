---
title: "SDLContext.RawApi — Method: GetKeyboardFocus"
description: "Exact Method: GetKeyboardFocus contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.574fd52bd5e771cb
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetKeyboardFocus

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetKeyboardFocus`

<a id="api-b60ee9bd698fef8b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetKeyboardFocus db2917b62bae737b22fd7ecdb2d786c4c55888e8289c600910ae6adb84190b17 -->

```csharp
public Inno.Native.Sdl3.SDLWindow* Inno.Native.Sdl3.SDLContext.RawApi.GetKeyboardFocus()
```

Query the window which currently has keyboard focus.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** the window with keyboard focus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41329).
