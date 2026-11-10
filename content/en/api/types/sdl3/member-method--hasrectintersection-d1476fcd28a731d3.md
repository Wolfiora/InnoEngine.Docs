---
title: "SDLContext.RawApi — Method: HasRectIntersection"
description: "Exact Method: HasRectIntersection contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d1476fcd28a731d3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HasRectIntersection

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasRectIntersection`

<a id="api-dee21f9e66073b88"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HasRectIntersection(Inno.Native.Sdl3.SDLRect*,Inno.Native.Sdl3.SDLRect*) 12949a8ef383e4d48e15351ea0a2f02fa9f1c42548f0f7b147a82340df2c7220 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HasRectIntersection(Inno.Native.Sdl3.SDLRect* A, Inno.Native.Sdl3.SDLRect* B)
```

Determine whether two rectangles intersect.
If either pointer is NULL the function will return false.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetRectIntersection

**Parameter `A`:** an SDL_Rect structure representing the first rectangle.

**Parameter `B`:** an SDL_Rect structure representing the second rectangle.

**Returns:** true if there is an intersection, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30817).
