---
title: "SDLContext.RawApi — Method: HasRectIntersectionFloat"
description: "Exact Method: HasRectIntersectionFloat contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c3a8bd1347f1b3a6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HasRectIntersectionFloat

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasRectIntersectionFloat`

<a id="api-70e308c93685be62"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HasRectIntersectionFloat(Inno.Native.Sdl3.SDLFRect*,Inno.Native.Sdl3.SDLFRect*) f309ec27c36403dd10f4e5459be09a2d493754f16598446c3aa73e55787155b0 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HasRectIntersectionFloat(Inno.Native.Sdl3.SDLFRect* A, Inno.Native.Sdl3.SDLFRect* B)
```

Determine whether two rectangles intersect with float precision.
If either pointer is NULL the function will return false.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetRectIntersectionFloat

**Parameter `A`:** an SDL_FRect structure representing the first rectangle.

**Parameter `B`:** an SDL_FRect structure representing the second rectangle.

**Returns:** true if there is an intersection, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L48298).
