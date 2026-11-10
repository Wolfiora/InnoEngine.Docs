---
title: "SDLContext.RawApi — Method: GetRectUnion"
description: "Exact Method: GetRectUnion contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e5cd3eb4673ee3ec
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRectUnion

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRectUnion`

<a id="api-18d8dc6b033498b7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRectUnion(Inno.Native.Sdl3.SDLRect*,Inno.Native.Sdl3.SDLRect*,Inno.Native.Sdl3.SDLRect*) 024de95cdceb2f0dcaa19894fbf85411d078c47a65ab3f98f37ee23b963ce66f -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetRectUnion(Inno.Native.Sdl3.SDLRect* A, Inno.Native.Sdl3.SDLRect* B, Inno.Native.Sdl3.SDLRect* result)
```

Calculate the union of two rectangles.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `A`:** an SDL_Rect structure representing the first rectangle.

**Parameter `B`:** an SDL_Rect structure representing the second rectangle.

**Parameter `result`:** an SDL_Rect structure filled in with the union of rectangles
`A` and `B`.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41959).
