---
title: "SDLContext.RawApi — Method: Strtod"
description: "Exact Method: Strtod contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.30b210fb9a63544d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Strtod

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Strtod`

<a id="api-735a369196ac74e0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Strtod(System.SByte*,System.SByte**) 20e2b61636452defe676032f191d1f6332e68486547e178ed4e7b2100b49a740 -->

```csharp
public double Inno.Native.Sdl3.SDLContext.RawApi.Strtod(sbyte* str, sbyte** endp)
```

Parse a `double` from a string.
This function makes fewer guarantees than the C runtime `strtod`:
- Only decimal notation is guaranteed to be supported. The handling of
scientific and hexadecimal notation is unspecified.
- Whether or not INF and NAN can be parsed is unspecified.
- The precision of the result is unspecified.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_atoi

**See also:** SDL_atof

**See also:** SDL_strtol

**See also:** SDL_strtoll

**See also:** SDL_strtoul

**See also:** SDL_strtoull

**Parameter `str`:** the null-terminated string to read. Must not be NULL.

**Parameter `endp`:** if not NULL, the address of the first invalid character (i.e.
the next character after the parsed number) will be written to
this pointer.

**Returns:** the parsed `double`, or 0 if no number could be parsed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40788).
