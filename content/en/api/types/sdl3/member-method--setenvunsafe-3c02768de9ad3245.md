---
title: "SDLContext.RawApi — Method: SetenvUnsafe"
description: "Exact Method: SetenvUnsafe contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3c02768de9ad3245
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetenvUnsafe

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetenvUnsafe`

<a id="api-75aac5e65c0ceaeb"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetenvUnsafe(System.SByte*,System.SByte*,System.Int32) f736631dae094369e2bb511af6ef600ed9194cb21a09d770525ff8e4effbc202 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.SetenvUnsafe(sbyte* name, sbyte* value, int overwrite)
```

Set the value of a variable in the environment.

**Thread safety:** This function is not thread safe, consider using
SDL_SetEnvironmentVariable() instead.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetEnvironmentVariable

**Parameter `name`:** the name of the variable to set.

**Parameter `value`:** the value of the variable to set.

**Parameter `overwrite`:** 1 to overwrite the variable if it exists, 0 to return
success without setting the variable if it already exists.

**Returns:** 0 on success, -1 on error.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46384).
