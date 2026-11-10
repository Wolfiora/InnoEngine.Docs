---
title: "SDL — Method: UnlockProperties"
description: "Exact Method: UnlockProperties contracts in SDL."
uid: api.inno.native.sdl3.1ebcfa1350ed8bcd
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: UnlockProperties

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UnlockProperties`

<a id="api-fcb886c92ede1b6f"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.UnlockProperties(System.UInt32) e1e102432d5ee129b3cabe8c150154448a912968f6a497229ac0c35535519fc2 -->

```csharp
public static void Inno.Native.Sdl3.SDL.UnlockProperties(uint props)
```

Unlock a group of properties.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_LockProperties

**Parameter `props`:** the properties to unlock.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L988).
