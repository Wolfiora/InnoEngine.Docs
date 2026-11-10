---
title: "SDLContext.RawApi — Method: Vsnprintf"
description: "Exact Method: Vsnprintf contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5013f6f112a4bf18
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Vsnprintf

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Vsnprintf`

<a id="api-7709f2bc6acaa2fa"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Vsnprintf(System.SByte*,System.UInt64,System.SByte*,System.SByte*) 2f4321ccbb7cb469ad18b51b9c3b233456d94643ba4daa7ef48d55d04dfceccd -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Vsnprintf(sbyte* text, ulong maxlen, sbyte* fmt, sbyte* ap)
```

This works exactly like vsnprintf() but doesn't require access to a C
runtime.
Functions identically to SDL_snprintf(), except it takes a `va_list`
instead of using `...` variable arguments.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `text`:** the buffer to write the string into. Must not be NULL.

**Parameter `maxlen`:** the maximum bytes to write, including the null-terminator.

**Parameter `fmt`:** a printf-style format string. Must not be NULL.

**Parameter `ap`:** a `va_list` values to be used with the format string.

**Returns:** the number of bytes that should be written, not counting the
null-terminator char, or a negative value on error.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23104).
