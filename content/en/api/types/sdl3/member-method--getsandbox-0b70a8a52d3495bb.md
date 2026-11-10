---
title: "SDL — Method: GetSandbox"
description: "Exact Method: GetSandbox contracts in SDL."
uid: api.inno.native.sdl3.0b70a8a52d3495bb
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetSandbox

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSandbox`

<a id="api-21e45be3ce95a5b7"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetSandbox 5630d6b1d74902822ccf35b72db943d344a68fa88fd0289f31c4edc934187037 -->

```csharp
public static Inno.Native.Sdl3.SDLSandbox Inno.Native.Sdl3.SDL.GetSandbox()
```

Get the application sandbox environment, if any.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** the application sandbox environment or SDL_SANDBOX_NONE if the
application is not running in a sandbox environment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1072).
