---
title: "SDLContext — Method: SetNumberProperty"
description: "Exact Method: SetNumberProperty contracts in SDLContext."
uid: api.inno.native.sdl3.34d2baa783f3c096
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: SetNumberProperty

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetNumberProperty`

<a id="api-60f1bafd55ebb8b2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.SetNumberProperty(System.UInt32,System.String,System.Int64) adce3c93197f87851d52733046bfed6fc57e45f5f46cd60f90591624f84d9b55 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.SetNumberProperty(uint props, string name, long value)
```

Set an integer property in a group of properties.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetNumberProperty

**Parameter `props`:** the properties to modify.

**Parameter `name`:** the name of the property to modify.

**Parameter `value`:** the new value of the property.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L11817).
