---
title: "SDL — Method: SetStringProperty"
description: "Exact Method: SetStringProperty contracts in SDL."
uid: api.inno.native.sdl3.57ffcb063d9c788a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: SetStringProperty

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetStringProperty`

<a id="api-d2df7aa9b2471a5b"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.SetStringProperty(System.UInt32,System.String,System.String) 23041de3d0f5507af748354f4344dabf85ac89d34a800b8da6fe6abd59a45a27 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.SetStringProperty(uint props, string name, string? value)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2483).
