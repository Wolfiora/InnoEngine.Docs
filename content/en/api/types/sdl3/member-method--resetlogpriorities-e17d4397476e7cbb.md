---
title: "SDLContext.RawApi — Method: ResetLogPriorities"
description: "Exact Method: ResetLogPriorities contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e17d4397476e7cbb
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ResetLogPriorities

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ResetLogPriorities`

<a id="api-fd9a7a691d3d32fb"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ResetLogPriorities 466faf05b5a99a0ed29431456907e385b3c8fc81ad67e9b6ddeade64e9c421a9 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.ResetLogPriorities()
```

Reset all priorities to default.
This is called by SDL_Quit().

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetLogPriorities

**See also:** SDL_SetLogPriority


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31428).
