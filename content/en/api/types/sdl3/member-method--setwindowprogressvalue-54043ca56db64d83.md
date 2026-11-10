---
title: "SDLContext.RawApi — Method: SetWindowProgressValue"
description: "Exact Method: SetWindowProgressValue contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.54043ca56db64d83
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetWindowProgressValue

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetWindowProgressValue`

<a id="api-342ae3e75d5f569a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetWindowProgressValue(Inno.Native.Sdl3.SDLWindow*,System.Single) 625de0efed980a1d33983c75d15181e62c4e475822347c41f3eca7d10f5ba161 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetWindowProgressValue(Inno.Native.Sdl3.SDLWindow* window, float value)
```

Sets the value of the progress bar for the given window’s taskbar icon.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.4.0.

**Parameter `window`:** the window whose progress value is to be modified.

**Parameter `value`:** the progress value in the range of [0.0f - 1.0f]. If the value
is outside the valid range, it gets clamped.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26925).
