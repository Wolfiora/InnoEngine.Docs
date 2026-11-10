---
title: "SDLContext.RawApi — Method: GetRectIntersectionFloat"
description: "Exact Method: GetRectIntersectionFloat contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2bb7ab7a18d8913a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRectIntersectionFloat

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRectIntersectionFloat`

<a id="api-2adf4c55284a7770"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRectIntersectionFloat(Inno.Native.Sdl3.SDLFRect*,Inno.Native.Sdl3.SDLFRect*,Inno.Native.Sdl3.SDLFRect*) 35639ef86a0257d37e5815d8411afca53da6360e48d55af9ff9f471ee2443bfd -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetRectIntersectionFloat(Inno.Native.Sdl3.SDLFRect* A, Inno.Native.Sdl3.SDLFRect* B, Inno.Native.Sdl3.SDLFRect* result)
```

Calculate the intersection of two rectangles with float precision.
If `result` is NULL then this function will return false.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasRectIntersectionFloat

**Parameter `A`:** an SDL_FRect structure representing the first rectangle.

**Parameter `B`:** an SDL_FRect structure representing the second rectangle.

**Parameter `result`:** an SDL_FRect structure filled in with the intersection of
rectangles `A` and `B`.

**Returns:** true if there is an intersection, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42140).
