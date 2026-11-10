---
title: "SDL — Method: SetNumberProperty"
description: "Exact Method: SetNumberProperty contracts in SDL."
uid: api.inno.native.sdl3.cf72dd4f3d170a97
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: SetNumberProperty

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetNumberProperty`

<a id="api-1f3dc745df550ec2"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.SetNumberProperty(System.UInt32,System.String,System.Int64) 618209eec64b91f0ffe42aca08af42b7fd01aea53929b09bc9f935a68eaca796 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.SetNumberProperty(uint props, string name, long value)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L401).
