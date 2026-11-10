---
title: "SDLContext.RawApi — Method: GetRectEnclosingPointsFloat"
description: "Exact Method: GetRectEnclosingPointsFloat contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8a9757da712010b0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRectEnclosingPointsFloat

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRectEnclosingPointsFloat`

<a id="api-33829a1b908ec220"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRectEnclosingPointsFloat(Inno.Native.Sdl3.SDLFPoint*,System.Int32,Inno.Native.Sdl3.SDLFRect*,Inno.Native.Sdl3.SDLFRect*) 33957180e1bc1e46efcb666f59a03b71412fa1d45814ff16e70f759122d4e630 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetRectEnclosingPointsFloat(Inno.Native.Sdl3.SDLFPoint* points, int count, Inno.Native.Sdl3.SDLFRect* clip, Inno.Native.Sdl3.SDLFRect* result)
```

Calculate a minimal rectangle enclosing a set of points with float
precision.
If `clip` is not NULL then only points inside of the clipping rectangle are
considered.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `points`:** an array of SDL_FPoint structures representing points to be
enclosed.

**Parameter `count`:** the number of structures in the `points` array.

**Parameter `clip`:** an SDL_FRect used for clipping or NULL to enclose all points.

**Parameter `result`:** an SDL_FRect structure filled in with the minimal enclosing
rectangle.

**Returns:** true if any points were enclosed or false if all the points were
outside of the clipping rectangle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46278).
