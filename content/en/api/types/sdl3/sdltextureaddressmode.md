---
title: "SDLTextureAddressMode"
description: "Reference for SDLTextureAddressMode in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.06f51d42d052b88e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLTextureAddressMode`

This reference describes `SDLTextureAddressMode` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`SDL_TEXTURE_ADDRESS_AUTO`](#api-b03738a1c7b2a9d4) | Field |
| [`SDL_TEXTURE_ADDRESS_CLAMP`](#api-3bc35c2f06f38077) | Field |
| [`SDL_TEXTURE_ADDRESS_INVALID`](#api-d293cad33fab93b8) | Field |
| [`SDL_TEXTURE_ADDRESS_WRAP`](#api-cd7e3774c412e1cb) | Field |

## Type declaration

<a id="api-06f51d42d052b88e"></a>
<!-- api: T:Inno.Native.Sdl3.SDLTextureAddressMode f6a746e75c7c0a601acb3403a1ad51b1e303b10cc61c72ea16ab7cc7fd0bdfce -->

```csharp
public enum Inno.Native.Sdl3.SDLTextureAddressMode : int
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59755).

## `SDL_TEXTURE_ADDRESS_AUTO`

<a id="api-b03738a1c7b2a9d4"></a>
<!-- api: F:Inno.Native.Sdl3.SDLTextureAddressMode.SDL_TEXTURE_ADDRESS_AUTO 86e59d761e115d2edc2e934ea31c09088638aa1d568233baf3024bd3252f8b3a -->

```csharp
Inno.Native.Sdl3.SDLTextureAddressMode.SDL_TEXTURE_ADDRESS_AUTO = 0
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59758).

## `SDL_TEXTURE_ADDRESS_CLAMP`

<a id="api-3bc35c2f06f38077"></a>
<!-- api: F:Inno.Native.Sdl3.SDLTextureAddressMode.SDL_TEXTURE_ADDRESS_CLAMP 1df5865d457b9a8c8a46a66fdc62d8d376ceddebea54c64a6568f769226bcb10 -->

```csharp
Inno.Native.Sdl3.SDLTextureAddressMode.SDL_TEXTURE_ADDRESS_CLAMP = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59759).

## `SDL_TEXTURE_ADDRESS_INVALID`

<a id="api-d293cad33fab93b8"></a>
<!-- api: F:Inno.Native.Sdl3.SDLTextureAddressMode.SDL_TEXTURE_ADDRESS_INVALID a57c9e5d57bc07aab9714ef1fab689b0577f295cfe07e32794db266b1ad56256 -->

```csharp
Inno.Native.Sdl3.SDLTextureAddressMode.SDL_TEXTURE_ADDRESS_INVALID = -1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59757).

## `SDL_TEXTURE_ADDRESS_WRAP`

<a id="api-cd7e3774c412e1cb"></a>
<!-- api: F:Inno.Native.Sdl3.SDLTextureAddressMode.SDL_TEXTURE_ADDRESS_WRAP ef360b59dba02eedf025b9c337a43f07edcbef8ed95f9a32ffdfed000d3d29d8 -->

```csharp
Inno.Native.Sdl3.SDLTextureAddressMode.SDL_TEXTURE_ADDRESS_WRAP = 2
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59760).
