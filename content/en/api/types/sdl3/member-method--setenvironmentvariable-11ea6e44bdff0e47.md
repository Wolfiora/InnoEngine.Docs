---
title: "SDLContext.RawApi — Method: SetEnvironmentVariable"
description: "Exact Method: SetEnvironmentVariable contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.11ea6e44bdff0e47
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetEnvironmentVariable

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetEnvironmentVariable`

<a id="api-116467e5ca7428fb"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetEnvironmentVariable(Inno.Native.Sdl3.SDLEnvironment*,System.SByte*,System.SByte*,System.Byte) 913f841a0c1a4d9c6b17c0d241eccf60adb65e15ca7a53cfc6709ff4a776db9e -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetEnvironmentVariable(Inno.Native.Sdl3.SDLEnvironment* env, sbyte* name, sbyte* value, byte overwrite)
```

Set the value of a variable in the environment.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetEnvironment

**See also:** SDL_CreateEnvironment

**See also:** SDL_GetEnvironmentVariable

**See also:** SDL_GetEnvironmentVariables

**See also:** SDL_UnsetEnvironmentVariable

**Parameter `env`:** the environment to modify.

**Parameter `name`:** the name of the variable to set.

**Parameter `value`:** the value of the variable to set.

**Parameter `overwrite`:** true to overwrite the variable if it exists, false to
return success without setting the variable if it already
exists.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18046).
