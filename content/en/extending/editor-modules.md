---
exampleMode: host
exampleProjects:
  - Inno.Editor.Core
title: Create an Editor module
description: Give a shared Editor feature a discovered identity, activation
  hooks and explicit resource ownership.
uid: extending.editor-modules
kind: how-to
owners:
  - Inno.Editor.Core
  - Inno.Editor.Interactions
contracts:
  - architecture.editor-generations
---
# Create an Editor module

Use a module for feature state shared across panels and owned by one Editor extension generation. The host discovers, constructs, starts, updates and stops it. A module is not a global singleton or a second application composition root.

## Prerequisites

Include your extension assembly in the current Editor product or plugin's discovered type scope. Reference the host `Inno.Editor.Core` contract. Script-authored modules use the selected `InnoEditor.Core` facade and its separate script compiler path.

## Declare an identity and callbacks

This host-side example counts frames while its generation is active:

```csharp
using Inno.Editor.Core;

[EditorModule("example.frame-counter", order: 100)]
public sealed class FrameCounterModule : EditorModule
{
    public long frames { get; private set; }

    protected override void OnStart(EditorContext context) => frames = 0;
    protected override void OnUpdate(EditorContext context) => frames++;
}
```

The attribute ID is mandatory and globally unique. Discovery, diagnostics and optional state storage use that same identity. Another module or panel can request the discovered module through its unique constructor when resolution is unambiguous.

Only a successfully started module updates. A failed `OnStart` still receives stop compensation because ownership was established before the call. Release subscriptions, registries and watchers in their matching stop/dispose stages. Override `OnDispose` for resources owned until final retirement; do not call infrastructure teardown to manufacture your own host lifecycle.

## Block later updates only for an actual transition

`blocksFollowingUpdates` is a generic ordering barrier. While a module returns `true`, later modules do not update during that frame; panels and modals can still draw. The scripting transition uses this to keep Scene updates from resuming before script activation. Use it for an actual atomic startup/switch boundary, not arbitrary feature-to-feature coupling.

## Keep persistent state neutral

Use [capture and restore hooks](editor-state.md) for project-specific state. Store values that can be resolved again, not delegates, threads or plugin instances. Publish current diagnostic values through [frame statistics](../manual/editor/statistics.md); do not put arbitrary services in the context.

## Diagnose activation failures

An ambiguous constructor dependency, duplicate identity or construction failure rejects the candidate before replacing the current catalog. Failed start compensation or resource retirement faults the shared generation gate. Inspect current diagnostics and resolve the owner; repeatedly rebuilding the same failed generation does not make its resources released.
