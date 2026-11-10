---
title: "SDLContext — Method: ComposeCustomBlendMode"
description: "Exact Method: ComposeCustomBlendMode contracts in SDLContext."
uid: api.inno.native.sdl3.07aa1c51ddbbc68b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: ComposeCustomBlendMode

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ComposeCustomBlendMode`

<a id="api-668c28f5471661d9"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.ComposeCustomBlendMode(Inno.Native.Sdl3.SDLBlendFactor,Inno.Native.Sdl3.SDLBlendFactor,Inno.Native.Sdl3.SDLBlendOperation,Inno.Native.Sdl3.SDLBlendFactor,Inno.Native.Sdl3.SDLBlendFactor,Inno.Native.Sdl3.SDLBlendOperation) 56a610671d252e6048325a663093b7da4ec1ac589375bc55f8bb65030303278f -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.ComposeCustomBlendMode(Inno.Native.Sdl3.SDLBlendFactor srcColorFactor, Inno.Native.Sdl3.SDLBlendFactor dstColorFactor, Inno.Native.Sdl3.SDLBlendOperation colorOperation, Inno.Native.Sdl3.SDLBlendFactor srcAlphaFactor, Inno.Native.Sdl3.SDLBlendFactor dstAlphaFactor, Inno.Native.Sdl3.SDLBlendOperation alphaOperation)
```

Compose a custom blend mode for renderers.
The functions SDL_SetRenderDrawBlendMode and SDL_SetTextureBlendMode accept
the SDL_BlendMode returned by this function if the renderer supports it.
A blend mode controls how the pixels from a drawing operation (source) get
combined with the pixels from the render target (destination). First, the
components of the source and destination pixels get multiplied with their
blend factors. Then, the blend operation takes the two products and
calculates the result that will get stored in the render target.
Expressed in pseudocode, it would look like this:
```c
dstRGB = colorOperation(srcRGB * srcColorFactor, dstRGB * dstColorFactor);
dstA = alphaOperation(srcA * srcAlphaFactor, dstA * dstAlphaFactor);
```
Where the functions `colorOperation(src, dst)` and `alphaOperation(src,
dst)` can return one of the following:
- `src + dst`
- `src - dst`
- `dst - src`
- `min(src, dst)`
- `max(src, dst)`
The red, green, and blue components are always multiplied with the first,
second, and third components of the SDL_BlendFactor, respectively. The
fourth component is not used.
The alpha component is always multiplied with the fourth component of the
SDL_BlendFactor. The other components are not used in the alpha
calculation.
Support for these blend modes varies for each renderer. To check if a
specific SDL_BlendMode is supported, create a renderer and pass it to
either SDL_SetRenderDrawBlendMode or SDL_SetTextureBlendMode. They will
return with an error if the blend mode is not supported.
This list describes the support of custom blend modes for each renderer.
All renderers support the four blend modes listed in the SDL_BlendMode
enumeration.
- **direct3d**: Supports all operations with all factors. However, some
factors produce unexpected results with `SDL_BLENDOPERATION_MINIMUM` and
`SDL_BLENDOPERATION_MAXIMUM`.
- **direct3d11**: Same as Direct3D 9.
- **opengl**: Supports the `SDL_BLENDOPERATION_ADD` operation with all
factors. OpenGL versions 1.1, 1.2, and 1.3 do not work correctly here.
- **opengles2**: Supports the `SDL_BLENDOPERATION_ADD`,
`SDL_BLENDOPERATION_SUBTRACT`, `SDL_BLENDOPERATION_REV_SUBTRACT`
operations with all factors.
- **psp**: No custom blend mode support.
- **software**: No custom blend mode support.
Some renderers do not provide an alpha component for the default render
target. The `SDL_BLENDFACTOR_DST_ALPHA` and
`SDL_BLENDFACTOR_ONE_MINUS_DST_ALPHA` factors do not have an effect in this
case.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetRenderDrawBlendMode

**See also:** SDL_GetRenderDrawBlendMode

**See also:** SDL_SetTextureBlendMode

**See also:** SDL_GetTextureBlendMode

**Parameter `srcColorFactor`:** the SDL_BlendFactor applied to the red, green, and
blue components of the source pixels.

**Parameter `dstColorFactor`:** the SDL_BlendFactor applied to the red, green, and
blue components of the destination pixels.

**Parameter `colorOperation`:** the SDL_BlendOperation used to combine the red,
green, and blue components of the source and
destination pixels.

**Parameter `srcAlphaFactor`:** the SDL_BlendFactor applied to the alpha component of
the source pixels.

**Parameter `dstAlphaFactor`:** the SDL_BlendFactor applied to the alpha component of
the destination pixels.

**Parameter `alphaOperation`:** the SDL_BlendOperation used to combine the alpha
component of the source and destination pixels.

**Returns:** an SDL_BlendMode that represents the chosen factors and
operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13269).
