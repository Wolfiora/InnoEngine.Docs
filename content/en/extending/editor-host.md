---
title: Compose and retire an Editor host
description: Supply product capabilities explicitly, preflight before creating
  resources and preserve complete shutdown evidence.
uid: extending.editor-host
kind: how-to
owners:
  - Inno.Editor.Hosting
contracts:
  - project.inno-editor-hosting
---
# Compose and retire an Editor host

Use `EditorApplication.RunAsync` to compose the shared Editor lifecycle with explicit product services. The Hosting library has no executable entry, platform default, standard distribution registration or public internal-host escape hatch. Ordinary users start the [Editor entry](../contributing/development-entries.md).

## Supply the selected product

Provide launch options for the project, catalog/selection, window, frame driver, keyboard conventions, distribution, initial export target, SDK context, module/serialization sources and log factory. The host validates registered targets, compatible authoring/presentation providers, input conventions and a positive frame limit before creating resources.

Pre-cancellation does not create a Project, prepare Native code or invoke resource factories. Invalid configuration must fail before writing a partial project. A different game export target does not change the currently selected Editor Native or ImGui shader target.

The common `EditorProduct.props` owns built-in feature, panel and presentation dependencies. Windows and macOS products import it so attribute-only extensions still reach deployment and its dependency manifest. Hosting references describe actual implementation/contracts, not a second feature list. Do not add type anchors or runtime directory scanning to compensate for a missing product dependency.

## Respect existing layout state

The standard host embeds `DefaultEditorLayout.ini` and passes it when constructing the Editor context before presentation loads. A new project receives a readable `editor.ini`; an existing file wins and is not overwritten by an upgrade or reopen.

The initial dock tree arranges Scene/Game at upper left, File below, Hierarchy centrally, Inspector/Shader Editor at upper right and Stats/Console below. It contains standard windows, docking and panel toggles—not sample scene IDs, shader documents, plugin windows, navigation, Selection, History or temporary modals. Subsequent state saving follows the existing Editor lifecycle.

## Run a lifecycle smoke check honestly

The default window is visible. With an explicit Project, hidden-window smoke options run the same host, device and shutdown path without taking desktop focus. They test initialization and lifetime, not visual output, GUI interaction or audible playback.

Inspect the actual renderer, neutral sRGB presentation capability, completed frames, current error diagnostics and normal exit. Do not depend on a particular upstream debug log sentence. Keep physical-device and interactive acceptance separate from a hidden smoke result.

## Release all owners before returning

Catalogs, immutable configuration and external services are borrowed. Newly created engines, sessions, devices, tasks and callbacks returned by factories transfer to the host. Shutdown stops tasks, unregisters callbacks, saves current Editor state/layout, retires scenes/resources, then releases windows and Native owners.

Pending/Faulted retirement and collectible-generation weak monitoring remain real outcomes. `RunAsync` disposes its shell before returning and propagates device-release failure. A product-resources-released log is only one phase; final disposal includes devices, input, windows and platform ownership, and actual process exit still needs independent observation.

Project authoring IO belongs to authoring services. OS user locations belong to the selected platform product. Extensions and tests use this public entry; they do not gain access to the private `EditorHost` implementation.
