---
title: "SDLContext.RawApi — Method: ShowSaveFileDialog"
description: "Exact Method: ShowSaveFileDialog contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.90c94d9afae06a59
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ShowSaveFileDialog

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ShowSaveFileDialog`

<a id="api-e8e828bbb4ce5276"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ShowSaveFileDialog(,System.Void*,Inno.Native.Sdl3.SDLWindow*,Inno.Native.Sdl3.SDLDialogFileFilter*,System.Int32,System.SByte*) 51e193cad547be845567098c08f710b701460c716863936fd2d401f7b0019bd3 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.ShowSaveFileDialog(delegate* unmanaged[Cdecl]<void*, sbyte**, int, void> callback, void* userdata, Inno.Native.Sdl3.SDLWindow* window, Inno.Native.Sdl3.SDLDialogFileFilter* filters, int nfilters, sbyte* default_location)
```

Displays a dialog that lets the user choose a new or existing file on their
filesystem.
This is an asynchronous function; it will return immediately, and the
result will be passed to the callback.
The callback will be invoked with a null-terminated list of files the user
chose. The list will be empty if the user canceled the dialog, and it will
be NULL if an error occurred.
Note that the callback may be called from a different thread than the one
the function was invoked on.
The chosen file may or may not already exist.
On Linux, dialogs may require XDG Portals, which requires DBus, which
requires an event-handling loop. Apps that do not use SDL to handle events
should add a call to SDL_PumpEvents in their main loop.

**Thread safety:** This function should be called only from the main thread. The
callback may be invoked from the same thread or from a
different one, depending on the OS's constraints.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_DialogFileCallback

**See also:** SDL_DialogFileFilter

**See also:** SDL_ShowOpenFileDialog

**See also:** SDL_ShowOpenFolderDialog

**See also:** SDL_ShowFileDialogWithProperties

**Parameter `callback`:** a function pointer to be invoked when the user selects a
file and accepts, or cancels the dialog, or an error
occurs.

**Parameter `userdata`:** an optional pointer to pass extra data to the callback when
it will be invoked.

**Parameter `window`:** the window that the dialog should be modal for, may be NULL.
Not all platforms support this option.

**Parameter `filters`:** a list of filters, may be NULL. Not all platforms support
this option, and platforms that do support it may allow the
user to ignore the filters. If non-NULL, it must remain
valid at least until the callback is invoked.

**Parameter `nfilters`:** the number of filters. Ignored if filters is NULL.

**Parameter `default_location`:** the default folder or file to start the dialog at,
may be NULL. Not all platforms support this option.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L48424).
