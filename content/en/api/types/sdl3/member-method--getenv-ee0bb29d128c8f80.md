---
title: "SDLContext.RawApi — Method: Getenv"
description: "Exact Method: Getenv contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ee0bb29d128c8f80
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Getenv

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Getenv`

<a id="api-3feaf80c8d756325"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Getenv(System.SByte*) 21a20acf53bb5754165c0e108d47cccbd4d117715d177ad57b9550d27bc1256b -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.Getenv(sbyte* name)
```

Get the value of a variable in the environment.
The name of the variable is case sensitive on all platforms.
This function uses SDL's cached copy of the environment and is thread-safe.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `name`:** the name of the variable to get.

**Returns:** a pointer to the value of the variable or NULL if it can't be
found.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22795).
