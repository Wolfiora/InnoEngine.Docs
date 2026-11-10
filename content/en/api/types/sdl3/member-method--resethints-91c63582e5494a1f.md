---
title: "SDL — Method: ResetHints"
description: "Exact Method: ResetHints contracts in SDL."
uid: api.inno.native.sdl3.91c63582e5494a1f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: ResetHints

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ResetHints`

<a id="api-91aea35ba8556c1c"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.ResetHints 3b4fd22dbc654c608085968fd9f804f083f19929d9586eee84e742fe04903bab -->

```csharp
public static void Inno.Native.Sdl3.SDL.ResetHints()
```

Reset all hints to the default values.
This will reset all hints to the value of the associated environment
variable, or NULL if the environment isn't set. Callbacks will be called
normally with this change.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ResetHint


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2573).
