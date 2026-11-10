---
title: "SDLContext.RawApi — Method: GetRectEnclosingPoints"
description: "Exact Method: GetRectEnclosingPoints contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.416967c24ec45ab7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRectEnclosingPoints

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRectEnclosingPoints`

<a id="api-a336cc1b78ac3457"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRectEnclosingPoints(Inno.Native.Sdl3.SDLPoint*,System.Int32,Inno.Native.Sdl3.SDLRect*,Inno.Native.Sdl3.SDLRect*) 9dafeea42b4a44377779f62ec595c37238cc76346ede838b98d09ccd3c5ce0ec -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetRectEnclosingPoints(Inno.Native.Sdl3.SDLPoint* points, int count, Inno.Native.Sdl3.SDLRect* clip, Inno.Native.Sdl3.SDLRect* result)
```

Calculate a minimal rectangle enclosing a set of points.
If `clip` is not NULL then only points inside of the clipping rectangle are
considered.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `points`:** an array of SDL_Point structures representing points to be
enclosed.

**Parameter `count`:** the number of structures in the `points` array.

**Parameter `clip`:** an SDL_Rect used for clipping or NULL to enclose all points.

**Parameter `result`:** an SDL_Rect structure filled in with the minimal enclosing
rectangle.

**Returns:** true if any points were enclosed or false if all the points were
outside of the clipping rectangle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50831).
