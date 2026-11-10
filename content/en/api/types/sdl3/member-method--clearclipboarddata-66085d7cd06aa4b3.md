---
title: "SDL — Method: ClearClipboardData"
description: "Exact Method: ClearClipboardData contracts in SDL."
uid: api.inno.native.sdl3.66085d7cd06aa4b3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: ClearClipboardData

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ClearClipboardData`

<a id="api-14d4f8f53a8bd243"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.ClearClipboardData fca725ff452f7379eecd1ab8e5a3048edaade51b3fe5a05cf1442a877125bf44 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.ClearClipboardData()
```

Clear the clipboard data.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetClipboardData

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3026).
