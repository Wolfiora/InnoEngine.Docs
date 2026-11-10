---
title: "SDLContext.RawApi — Method: SetWindowsMessageHook"
description: "Exact Method: SetWindowsMessageHook contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7c05cac7a5477fc7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetWindowsMessageHook

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetWindowsMessageHook`

<a id="api-82ea68355c683ab3"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetWindowsMessageHook(,System.Void*) 84036e3cc932cc0af360efc705d7beecd81280165b701349113616913367d353 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.SetWindowsMessageHook(delegate* unmanaged[Cdecl]<void*, Inno.Native.Sdl3.TagMSG*, byte> callback, void* userdata)
```

Set a callback for every Windows message, run before TranslateMessage().
The callback may modify the message, and should return true if the message
should continue to be processed, or false to prevent further processing.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_WindowsMessageHook

**See also:** SDL_HINT_WINDOWS_ENABLE_MESSAGELOOP

**Parameter `callback`:** the SDL_WindowsMessageHook function to call.

**Parameter `userdata`:** a pointer to pass to every iteration of `callback`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31681).
