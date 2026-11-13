---
title: Understand the Editor and Player compositions
description: Follow shared hosting into explicit desktop and Browser product boundaries without duplicating engine services.
uid: platforms.product-composition
kind: explanation
owners: [Inno.Editor.WindowsX64, Inno.Editor.MacOSArm64, Inno.Player.WindowsX64, Inno.Player.MacOSArm64, Inno.Player.BrowserWasm32]
---
# Understand the Editor and Player compositions

A product selects concrete platform integrations and feeds them into shared engine hosting. Platform folders are composition boundaries, not separate implementations of the scene, input, asset or Editor systems. Start with [launching the Editor](../getting-started/first-editor-session.md) or [publishing a Player](publish-player.md) when you need a runnable application.

## Editor startup stays on the caller's main thread

The Windows and macOS composition libraries expose their respective `EditorComposition.Run` method. The unified Editor entry selects one product and calls it directly on the main thread. With no arguments, the product opens a native folder dialog. Closing that dialog without selecting a project is a normal exit.

| Result | Meaning |
| --- | --- |
| `0` | Normal exit or canceled folder selection. |
| `2` | Cancellation or invalid command-line arguments. |
| `1` | Startup or unhandled execution failure. |

Cancellation requests orderly shared-host shutdown. An already open native dialog retains its callback owner until the user completes or closes it; a cancellation token does not authorize freeing that callback early.

Both products explicitly provide SDL platform integration, BGFX rendering, filesystem storage, authoring services, dynamic .NET modules, serialization and build distribution to shared `EditorApplication` hosting. macOS additionally selects Command-key behavior and its horizontal-wheel policy. These choices belong to the product; shared features do not guess them from the host OS.

The composition assembly supplies its own resource location. Native content flows through normal SDK output propagation into the selected entry. It is not recovered from an unrelated bootstrap directory or prepared by a nested runtime MSBuild call. Building or publishing the Editor prepares its Editor native closure, including target-specific ImGui shaders; it does not imply a Player Support Pack was built.

## Player source is not a complete exported game

Desktop Player source projects are libraries used by the export template. The template produces the executable and combines generated game registration, code, runtime metadata, the catalog and its exact Pack. Launch the exported application rather than supplying an authoring project directory to an internal Player composition.

Windows uses the exported application's `Content/` directory. macOS uses `.app/Contents/Resources/Content`. Platform code chooses the application layout and OS data locations; shared filesystem deployment verifies metadata and content. CoreCLR and NativeAOT publication retain the same shared Player lifecycle, while their preparation requirements differ.

The product supplies caller-owned configuration and services. Shared hosting owns what it creates or explicitly accepts by transfer. Content stores cannot retire while consumers still hold leases; the internal content-source implementations are not extra public extension APIs. See [resource ownership](../architecture/ownership.md) and [application data](application-data.md).

## Browser composition uses an explicit page host

The Browser source project also uses the ordinary managed SDK as a library. Its publication template uses the WebAssembly SDK to create the runnable application. There is no Browser Editor product.

The page requires WebGL 2, imports the .NET runtime and forwards repeated `arg` query parameters to the shared Player command-line parser. For example, `index.html?arg=--smoke-frames&arg=3000` requests a bounded smoke run followed by normal cleanup. Invalid arguments are rejected before native device creation; a nonzero exit is shown on the page. Serve the export over HTTP rather than opening it as a local file.

The managed bridge schedules frames through the page and cancels pending frame requests during shutdown. Browser jobs run in the explicitly selected single-thread mode, rendering remains on the calling thread, and logs use inline delivery. Input still passes through platform events and the shared input model.

HTTP content acquisition reads owned manifest/catalog bytes, downloads the catalog's exact Pack and opens the common verified content reader. It does not extract a second writable `/Content` tree. Streams, stores, callbacks and storage have explicit owners; stop new work and retire these dependencies during shutdown. Browser persistence has its own platform implementation rather than a filesystem fallback.

## Support and verification boundaries

These are registered source compositions, not a guarantee that every graphics API, device or deployment mode is certified. Check the selected target's actual build/runtime evidence. Documentation extraction and example compilation do not run native dialogs, devices, product startup or long-running retirement scenarios.

Project contracts: [Windows Editor](../architecture/projects/inno-editor-windowsx64.md), [macOS Editor](../architecture/projects/inno-editor-macosarm64.md), [Windows Player](../architecture/projects/inno-player-windowsx64.md), [macOS Player](../architecture/projects/inno-player-macosarm64.md) and [Browser Player](../architecture/projects/inno-player-browserwasm32.md).
