---
title: "SDLContext.RawApi — Method: GetRectAndLineIntersection"
description: "Exact Method: GetRectAndLineIntersection contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.48eab833d74b2777
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRectAndLineIntersection

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRectAndLineIntersection`

<a id="api-41a2fc51ea747e42"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRectAndLineIntersection(Inno.Native.Sdl3.SDLRect*,System.Int32*,System.Int32*,System.Int32*,System.Int32*) b5f7ce4e53b968f1e6003becec0900431b1bf27e6214f9cb8306b831afa65390 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetRectAndLineIntersection(Inno.Native.Sdl3.SDLRect* rect, int* X1, int* Y1, int* X2, int* Y2)
```

Calculate the intersection of a rectangle and line segment.
This function is used to clip a line segment to a rectangle. A line segment
contained entirely within the rectangle or that does not intersect will
remain unchanged. A line segment that crosses the rectangle at either or
both ends will be clipped to the boundary of the rectangle and the new
coordinates saved in `X1`, `Y1`, `X2`, and/or `Y2` as necessary.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `rect`:** an SDL_Rect structure representing the rectangle to intersect.

**Parameter `X1`:** a pointer to the starting X-coordinate of the line.

**Parameter `Y1`:** a pointer to the starting Y-coordinate of the line.

**Parameter `X2`:** a pointer to the ending X-coordinate of the line.

**Parameter `Y2`:** a pointer to the ending Y-coordinate of the line.

**Returns:** true if there is an intersection, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L33598).
