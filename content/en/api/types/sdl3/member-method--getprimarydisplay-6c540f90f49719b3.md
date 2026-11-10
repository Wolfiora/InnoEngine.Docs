---
title: "SDL — Method: GetPrimaryDisplay"
description: "Exact Method: GetPrimaryDisplay contracts in SDL."
uid: api.inno.native.sdl3.6c540f90f49719b3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetPrimaryDisplay

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetPrimaryDisplay`

<a id="api-8f69ffb92f50f055"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetPrimaryDisplay 84fb70c32dd129f0c0999a8ec80e4ed3fd78f08dfde3a2fedc7231b157f759f0 -->

```csharp
public static uint Inno.Native.Sdl3.SDL.GetPrimaryDisplay()
```

Return the primary display.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetDisplays

**Returns:** the instance ID of the primary display on success or 0 on failure;
call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2615).
