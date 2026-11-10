---
title: "SDLContext — Method: SetStringProperty"
description: "Exact Method: SetStringProperty contracts in SDLContext."
uid: api.inno.native.sdl3.6e877bc758a9de9f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: SetStringProperty

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetStringProperty`

<a id="api-2ffd70e8d9794c67"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.SetStringProperty(System.UInt32,System.String,System.String) 766612cc052dfab720fd63a38dbb855fc2a59bcd9c1726988e26a57562f30c9c -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.SetStringProperty(uint props, string name, string? value)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14357).
