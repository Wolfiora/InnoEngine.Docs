---
title: "SDLContext.RawApi — Method: Vswprintf"
description: "Exact Method: Vswprintf contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a6a0886a3eb3fdaf
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Vswprintf

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Vswprintf`

<a id="api-f6edc59c281a19ca"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Vswprintf(System.UInt16*,System.UInt64,System.UInt16*,System.SByte*) 7433f7b6a0e49c9986212d99a46ba7843b22ac17c50ce810e206dca77fe3d279 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Vswprintf(ushort* text, ulong maxlen, ushort* fmt, sbyte* ap)
```

This works exactly like vswprintf() but doesn't require access to a C
runtime.
Functions identically to SDL_swprintf(), except it takes a `va_list`
instead of using `...` variable arguments.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `text`:** the buffer to write the string into. Must not be NULL.

**Parameter `maxlen`:** the maximum wide characters to write, including the
null-terminator.

**Parameter `fmt`:** a printf-style format wide string. Must not be NULL.

**Parameter `ap`:** a `va_list` values to be used with the format string.

**Returns:** the number of wide characters that should be written, not counting
the null-terminator char, or a negative value on error.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52596).
