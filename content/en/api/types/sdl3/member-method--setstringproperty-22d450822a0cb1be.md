---
title: "SDLContext.RawApi — Method: SetStringProperty"
description: "Exact Method: SetStringProperty contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.22d450822a0cb1be
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetStringProperty

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetStringProperty`

<a id="api-25b5d34de8dd991a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetStringProperty(System.UInt32,System.SByte*,System.SByte*) 84b87022ce8d9fdd0f7b2f3a4324b1f9b4fe79930732ca29a3c9b50004f81bfe -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetStringProperty(uint props, sbyte* name, sbyte* value)
```

Set a string property in a group of properties.
This function makes a copy of the string; the caller does not have to
preserve the data after this call completes.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetStringProperty

**Parameter `props`:** the properties to modify.

**Parameter `name`:** the name of the property to modify.

**Parameter `value`:** the new value of the property, or NULL to delete the property.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36621).
