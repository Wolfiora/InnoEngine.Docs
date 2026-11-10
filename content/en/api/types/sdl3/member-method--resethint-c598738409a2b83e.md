---
title: "SDLContext.RawApi — Method: ResetHint"
description: "Exact Method: ResetHint contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c598738409a2b83e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ResetHint

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ResetHint`

<a id="api-9e1768aa396ae478"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ResetHint(System.SByte*) b149f5f48ee83893ef374915b6a5f825107f7e79f883811896db4f2d0b89acfd -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ResetHint(sbyte* name)
```

Reset a hint to the default value.
This will reset a hint to the value of the environment variable, or NULL if
the environment isn't set. Callbacks will be called normally with this
change.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetHint

**See also:** SDL_ResetHints

**Parameter `name`:** the hint to set.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52239).
