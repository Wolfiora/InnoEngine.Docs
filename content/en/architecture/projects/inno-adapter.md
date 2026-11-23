---
# Generated metadata. Maintained by project synchronization tooling.
uid: project.inno-adapter
symbol: project:Inno.Adapter
title: Inno.Adapter
kind: project
owners:
- Inno.Adapter
sourceFingerprint: ee3f2acddadc1a9a3e7f93592f1bfb80223e871a10d453167c92c8983b5d7495
contracts: []
outdatedFor: cc719d39f79e243f7d2866bd7149b2b1ebdfaaa66d1b5f1f06017d4110798127

# Authoring metadata. Edit these fields and the explanation below.
source: InnoEngine contributors
description:
- Explicit selection and preflight for seven neutral runtime backend families.
outdated: false
exampleMode: host
exampleProjects:
- Inno.Adapter
---
# Inno.Adapter

Explicit selection and preflight for seven neutral runtime backend families.

Start with [composing a runtime host](../../extending/runtime-host.md) and [runtime lifetime](../runtime-lifetime.md).

## Selection before allocation

`AdapterSelection` stores the open stable IDs for Platform, Input, Storage, Rendering, Audio, Text and UI. It holds no native handle, service instance or reloadable object. Default values are unassigned; built-in IDs identify standard implementations rather than an implicit fallback.

`IAdapterCatalog` exposes the seven neutral factories without referencing concrete implementations or authoring pipelines. `AdapterSelection.Validate` checks every selection before any domain service is created. Invalid or missing registrations fail with `NotSupportedException`.

Presentation and compilers are authoring concerns, outside this runtime catalog. Use the separate authoring composition when building an Editor.

## Host usage

Supply live, explicitly owned dependencies as described above. These examples compile against the host contract; they do not initialize a complete product or verify a device.

```csharp
using Inno.Adapter;

static void Validate(
    AdapterSelection selection,
    IAdapterCatalog catalog
) => selection.Validate(catalog);
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/common/Inno.Adapter/Inno.Adapter.csproj) defines the host declarations. Source API extraction does not establish script visibility, native behavior or completed generation retirement.

## API reference

[Browse exact types and members](../../api/engine/adapter/index.md).
