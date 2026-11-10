---
title: "SDLContext.RawApi — Method: StrtokR"
description: "Exact Method: StrtokR contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.02baa4011641b3ad
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: StrtokR

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `StrtokR`

<a id="api-cc3c61eccbd794b1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.StrtokR(System.SByte*,System.SByte*,System.SByte**) 10c7035e74a2371bc9e1ede84c47c3f2c21ce06a7c77e4addd1b2c13e554cbd4 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.StrtokR(sbyte* str, sbyte* delim, sbyte** saveptr)
```

This works exactly like strtok_r() but doesn't require access to a C
runtime.
Break a string up into a series of tokens.
To start tokenizing a new string, `str` should be the non-NULL address of
the string to start tokenizing. Future calls to get the next token from the
same string should specify a NULL.
Note that this function will overwrite pieces of `str` with null chars to
split it into tokens. This function cannot be used with const/read-only
strings!
`saveptr` just needs to point to a `char *` that can be overwritten; SDL
will use this to save tokenizing state between calls. It is initialized if
`str` is non-NULL, and used to resume tokenizing when `str` is NULL.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `str`:** the string to tokenize, or NULL to continue tokenizing.

**Parameter `delim`:** the delimiter string that separates tokens.

**Parameter `saveptr`:** pointer to a char *, used for ongoing state.

**Returns:** A pointer to the next token, or NULL if no tokens remain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19370).
