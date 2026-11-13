---
title: Inno.Platform.WindowsX64
description: "Windows x64 application content and user-data locations."
uid: project.inno-platform-windowsx64
kind: project
owners: [Inno.Platform.WindowsX64]
---
# Inno.Platform.WindowsX64

Windows x64 application content and user-data locations.

Start with [the platform task guide](../../platforms/application-data.md).

## Resolve locations at product startup

This project provides operating-system location policy. It does not implement storage, content loading, input or windows. Resolve locations once during product startup and inject them into the actual Content, Storage and Log owners. No session or device ownership is created.

`userDataRoot` uses Windows `LocalApplicationData`. It rejects the wrong OS with `PlatformNotSupportedException` and unusable system locations with `InvalidOperationException`.

`GetPlayerContentDirectory` requires a nonempty, fully qualified executable directory. It returns the `Content` child directory without probing alternate layouts. Relative or empty input fails explicitly. This path calculation itself does not certify that a packaged directory exists.

## Use through product composition

Domain assemblies and game scripts consume the selected service contracts; they do not reproduce OS-path policy. There is no cross-platform guess, legacy-directory fallback or second settings store. See [application data locations](../../platforms/application-data.md) for the distinction between installed content and writable application values.



## Source and validation boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/runtime/Inno.Platform.WindowsX64/Inno.Platform.WindowsX64.csproj) defines this engine-owned surface. Host CLR declarations do not establish game-script exports, native execution or cross-platform certification. Platform, ABI and real-device checks remain separate from compiling the examples.

## API reference

[Browse exact types and members](../../api/engine/platform/windowsx64/index.md).
