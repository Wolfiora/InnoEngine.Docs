---
title: "SDLContext.RawApi — Method: GetRectAndLineIntersectionFloat"
description: "Exact Method: GetRectAndLineIntersectionFloat contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2068048f39139601
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRectAndLineIntersectionFloat

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRectAndLineIntersectionFloat`

<a id="api-77baf2416504fdf1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRectAndLineIntersectionFloat(Inno.Native.Sdl3.SDLFRect*,System.Single*,System.Single*,System.Single*,System.Single*) 22153c82c8c75f26583a33c2a39dcfeb056bb96037f74004eb66fdc1756d0b1b -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetRectAndLineIntersectionFloat(Inno.Native.Sdl3.SDLFRect* rect, float* X1, float* Y1, float* X2, float* Y2)
```

Calculate the intersection of a rectangle and line segment with float
precision.
This function is used to clip a line segment to a rectangle. A line segment
contained entirely within the rectangle or that does not intersect will
remain unchanged. A line segment that crosses the rectangle at either or
both ends will be clipped to the boundary of the rectangle and the new
coordinates saved in `X1`, `Y1`, `X2`, and/or `Y2` as necessary.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `rect`:** an SDL_FRect structure representing the rectangle to intersect.

**Parameter `X1`:** a pointer to the starting X-coordinate of the line.

**Parameter `Y1`:** a pointer to the starting Y-coordinate of the line.

**Parameter `X2`:** a pointer to the ending X-coordinate of the line.

**Parameter `Y2`:** a pointer to the ending Y-coordinate of the line.

**Returns:** true if there is an intersection, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21018).
