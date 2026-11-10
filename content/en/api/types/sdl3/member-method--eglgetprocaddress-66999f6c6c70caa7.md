---
title: "SDLContext.RawApi — Method: EglGetProcAddress"
description: "Exact Method: EglGetProcAddress contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.66999f6c6c70caa7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: EglGetProcAddress

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `EglGetProcAddress`

<a id="api-af15d63419683126"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.EglGetProcAddress(System.SByte*) 8491d47450f250a3f9948ca33ccb6dde03f0851c0149ca98799c278cabd2dda9 -->

```csharp
public delegate* unmanaged[Cdecl]<void> Inno.Native.Sdl3.SDLContext.RawApi.EglGetProcAddress(sbyte* proc)
```

Get an EGL library function by name.
If an EGL library is loaded, this function allows applications to get entry
points for EGL functions. This is useful to provide to an EGL API and
extension loader.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_EGL_GetCurrentDisplay

**Parameter `proc`:** the name of an EGL function.

**Returns:** a pointer to the named EGL function. The returned pointer should
be cast to the appropriate function signature.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L48049).
