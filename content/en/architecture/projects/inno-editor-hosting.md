---
title: Inno.Editor.Hosting
description: "Explicit Editor product composition, preflight, default layout and complete host retirement."
uid: project.inno-editor-hosting
kind: project
owners: [Inno.Editor.Hosting]
exampleMode: host
exampleProjects: [Inno.Editor.Hosting]
---
# Inno.Editor.Hosting

Explicit Editor product composition, preflight, default layout and complete host retirement.

Read the linked task or ownership explanation before using the exact API below.

## Compose through the public entry

[Compose and retire an Editor host](../../extending/editor-host.md) describes explicit launch options, pre-cancellation, configuration validation, product dependency ownership and lifecycle smoke limits. EditorApplication.RunAsync is the entry; EditorHost remains private. Hosting does not select a default platform/backend or standard distribution.

The shared EditorProduct.props owns built-in features/panels/presentation closure, including attribute-discovered extensions. Platform products import it. Hosting references cannot be replaced with runtime directory scanning or artificial type anchors.

## Preserve user state and ownership

The embedded default layout initializes only projects without an existing editor.ini. It is a dock layout, not another workspace or a container for transient selection/history/modal state. Borrowed catalogs/configuration remain caller-owned; factory-created engine/session/device/task/callback resources transfer to the host.

Shutdown drains tasks, unregisters callbacks, saves state/layout and retires resources before windows/Native owners. A product-resource log alone does not certify full device disposal or process exit. Exceptions and Pending/Faulted retirement remain visible.

## Executable usage

Supply existing live dependencies on the declared API surface. Compiling the example does not initialize a product or certify a physical device.

```csharp
using System.Threading;
using System.Threading.Tasks;
using Inno.Editor.Hosting;

static Task<int> Run(EditorLaunchOptions options, CancellationToken cancellation)
{
    return EditorApplication.RunAsync(options, cancellation);
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/hosting/Inno.Editor.Hosting/Inno.Editor.Hosting.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Types and exact member contracts](../../api/engine/editor/hosting/index.md) preserve captured declarations and source XML.
