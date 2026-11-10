---
title: "SDLContext.RawApi — Method: GetTextureScaleMode"
description: "Exact Method: GetTextureScaleMode contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.855cb83286e89349
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetTextureScaleMode

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTextureScaleMode`

<a id="api-cbd4667700513b31"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetTextureScaleMode(Inno.Native.Sdl3.SDLTexture*,Inno.Native.Sdl3.SDLScaleMode*) d20412e1ee438c1ca6fa5c6ec25e34b11d4d25aec7215942d1667792cbf26bf3 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetTextureScaleMode(Inno.Native.Sdl3.SDLTexture* texture, Inno.Native.Sdl3.SDLScaleMode* scaleMode)
```

Get the scale mode used for texture scale operations.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetTextureScaleMode

**Parameter `texture`:** the texture to query.

**Parameter `scaleMode`:** a pointer filled in with the current scale mode.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32123).
