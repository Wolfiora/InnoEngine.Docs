---
title: "SDLContext — Method: GetDirect3D9AdapterIndex"
description: "Exact Method: GetDirect3D9AdapterIndex contracts in SDLContext."
uid: api.inno.native.sdl3.fe73107461c71611
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetDirect3D9AdapterIndex

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetDirect3D9AdapterIndex`

<a id="api-6b8e4aaf52d04a55"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetDirect3D9AdapterIndex(System.UInt32) 669a0949ba3e39c2042e8e43d5289764b5cafbbf1e0803a97710426a30dba2c5 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.GetDirect3D9AdapterIndex(uint displayID)
```

Get the D3D9 adapter index that matches the specified display.
The returned adapter index can be passed to `IDirect3D9::CreateDevice` and
controls on which monitor a full screen application will appear.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `displayID`:** the instance of the display to query.

**Returns:** the D3D9 adapter index on success or -1 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15152).
