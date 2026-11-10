---
title: "SDLContext.RawApi — Method: GetRectUnionFloat"
description: "Exact Method: GetRectUnionFloat contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f4f70030831873f9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRectUnionFloat

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRectUnionFloat`

<a id="api-d4ab5343bea5b9fa"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRectUnionFloat(Inno.Native.Sdl3.SDLFRect*,Inno.Native.Sdl3.SDLFRect*,Inno.Native.Sdl3.SDLFRect*) b3e56f69279e8010865c702ca1a6b68ceede86ce85ab19aa1b4e475daa3b53e7 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetRectUnionFloat(Inno.Native.Sdl3.SDLFRect* A, Inno.Native.Sdl3.SDLFRect* B, Inno.Native.Sdl3.SDLFRect* result)
```

Calculate the union of two rectangles with float precision.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `A`:** an SDL_FRect structure representing the first rectangle.

**Parameter `B`:** an SDL_FRect structure representing the second rectangle.

**Parameter `result`:** an SDL_FRect structure filled in with the union of rectangles
`A` and `B`.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28046).
