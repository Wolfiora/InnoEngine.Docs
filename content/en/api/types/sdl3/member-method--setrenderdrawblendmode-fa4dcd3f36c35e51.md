---
title: "SDLContext.RawApi — Method: SetRenderDrawBlendMode"
description: "Exact Method: SetRenderDrawBlendMode contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.fa4dcd3f36c35e51
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetRenderDrawBlendMode

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetRenderDrawBlendMode`

<a id="api-8e68110f479135b2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetRenderDrawBlendMode(Inno.Native.Sdl3.SDLRenderer*,System.UInt32) 6a29107bd49e5c01657548331c66645e7daaa31e11a713af381defa7c54992a9 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetRenderDrawBlendMode(Inno.Native.Sdl3.SDLRenderer* renderer, uint blendMode)
```

Set the blend mode used for drawing operations (Fill and Line).
If the blend mode is not supported, the closest supported mode is chosen.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetRenderDrawBlendMode

**Parameter `renderer`:** the rendering context.

**Parameter `blendMode`:** the SDL_BlendMode to use for blending.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27556).
