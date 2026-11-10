---
title: "SDL — Method: GetDirect3D9AdapterIndex"
description: "Exact Method: GetDirect3D9AdapterIndex contracts in SDL."
uid: api.inno.native.sdl3.e501ba7c75745e40
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetDirect3D9AdapterIndex

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetDirect3D9AdapterIndex`

<a id="api-440389b2acd90d0e"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetDirect3D9AdapterIndex(System.UInt32) 42273b4035976800d0feee6e980aab1f149bcccc345a0d996cd1efac0bfc092c -->

```csharp
public static int Inno.Native.Sdl3.SDL.GetDirect3D9AdapterIndex(uint displayID)
```

Get the D3D9 adapter index that matches the specified display.
The returned adapter index can be passed to `IDirect3D9::CreateDevice` and
controls on which monitor a full screen application will appear.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `displayID`:** the instance of the display to query.

**Returns:** the D3D9 adapter index on success or -1 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3132).
