---
title: "SDLContext.RawApi — Method: GetRectIntersection"
description: "Exact Method: GetRectIntersection contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.348ce872bb919f8f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRectIntersection

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRectIntersection`

<a id="api-3626b80c68c15573"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRectIntersection(Inno.Native.Sdl3.SDLRect*,Inno.Native.Sdl3.SDLRect*,Inno.Native.Sdl3.SDLRect*) 6c6e0e020c66f46e5b75f1504addf41fd09fa241537b048813c21b0f316e38e3 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetRectIntersection(Inno.Native.Sdl3.SDLRect* A, Inno.Native.Sdl3.SDLRect* B, Inno.Native.Sdl3.SDLRect* result)
```

Calculate the intersection of two rectangles.
If `result` is NULL then this function will return false.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasRectIntersection

**Parameter `A`:** an SDL_Rect structure representing the first rectangle.

**Parameter `B`:** an SDL_Rect structure representing the second rectangle.

**Parameter `result`:** an SDL_Rect structure filled in with the intersection of
rectangles `A` and `B`.

**Returns:** true if there is an intersection, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20570).
