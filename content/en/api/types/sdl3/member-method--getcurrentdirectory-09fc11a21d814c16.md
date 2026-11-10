---
title: "SDLContext.RawApi — Method: GetCurrentDirectory"
description: "Exact Method: GetCurrentDirectory contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.09fc11a21d814c16
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetCurrentDirectory

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetCurrentDirectory`

<a id="api-1dd2b8009f16bda4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetCurrentDirectory 8c7d845bd46918768724e5f84a0683675ded47359ef3d644d06604e49481989c -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetCurrentDirectory()
```

Get what the system believes is the "current working directory."
For systems without a concept of a current working directory, this will
still attempt to provide something reasonable.
SDL does not provide a means to _change_ the current working directory; for
platforms without this concept, this would cause surprises with file access
outside of SDL.
The returned path is guaranteed to end with a path separator ('
\
' on
Windows, '/' on most other platforms).

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** a UTF-8 string of the current working directory in
platform-dependent notation. NULL if there's a problem. This
should be freed with SDL_free() when it is no longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21821).
