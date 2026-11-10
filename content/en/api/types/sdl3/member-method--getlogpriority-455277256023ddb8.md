---
title: "SDL — Method: GetLogPriority"
description: "Exact Method: GetLogPriority contracts in SDL."
uid: api.inno.native.sdl3.455277256023ddb8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetLogPriority

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetLogPriority`

<a id="api-01309665980ff78e"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetLogPriority(System.Int32) a7ed03854b245b631ccec69f8d9bc173193ea3c4b162b26dcd487922ec2349c7 -->

```csharp
public static Inno.Native.Sdl3.SDLLogPriority Inno.Native.Sdl3.SDL.GetLogPriority(int category)
```

Get the priority of a particular log category.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetLogPriority

**Parameter `category`:** the category to query.

**Returns:** the SDL_LogPriority for the requested category.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L654).
