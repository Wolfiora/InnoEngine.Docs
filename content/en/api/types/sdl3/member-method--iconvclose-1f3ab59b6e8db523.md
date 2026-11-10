---
title: "SDLContext.RawApi — Method: IconvClose"
description: "Exact Method: IconvClose contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1f3ab59b6e8db523
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: IconvClose

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IconvClose`

<a id="api-ed37362fff78a8b0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.IconvClose(Inno.Native.Sdl3.SDLIconvDataT*) 22c1d515bc4a4d780fbb874f80527533f12202eebda8d245cb88262a3ed74ed2 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.IconvClose(Inno.Native.Sdl3.SDLIconvDataT* cd)
```

This function frees a context used for character set conversion.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_iconv

**See also:** SDL_iconv_open

**See also:** SDL_iconv_string

**Parameter `cd`:** The character set conversion handle.

**Returns:** 0 on success, or -1 on failure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29979).
