---
title: "SDLContext.RawApi — Method: Vasprintf"
description: "Exact Method: Vasprintf contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a1b0056f81b0acd4
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Vasprintf

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Vasprintf`

<a id="api-2e23131dda7907d7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Vasprintf(System.SByte**,System.SByte*,System.SByte*) bde8ec5b8dd7c97d7855266d199ebe36826b91e17b28678dd025529dbc881a85 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Vasprintf(sbyte** strp, sbyte* fmt, sbyte* ap)
```

This works exactly like vasprintf() but doesn't require access to a C
runtime.
Functions identically to SDL_asprintf(), except it takes a `va_list`
instead of using `...` variable arguments.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `strp`:** on output, is set to the new string. Must not be NULL.

**Parameter `fmt`:** a printf-style format string. Must not be NULL.

**Parameter `ap`:** a `va_list` values to be used with the format string.

**Returns:** the number of bytes in the newly-allocated string, not counting
the null-terminator char, or a negative value on error.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17750).
