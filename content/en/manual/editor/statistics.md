---
exampleMode: host
exampleProjects: [Inno.Editor.Core]
title: Read and publish Editor statistics
description: Inspect frame timing and contribute stable feature values without coupling a feature to the Stats panel.
uid: manual.editor-statistics
kind: how-to
owners: [Inno.Editor.Core, Inno.Editor.Panel.Stats]
contracts: [architecture.ownership]
---
# Read and publish Editor statistics

The Stats panel displays frame timing and feature contributions published through the Editor context. Features do not reference the panel or add special rendering branches to it. Each contribution carries a stable group/item identity and a value already formatted for readers.

## Read the timing display

The internal frame sampler smooths instantaneous delta time and FPS for display. It emits a sample every 0.5 seconds and keeps at most 120 samples, covering the latest 60 seconds. Stopping drawing, moving time backward or a long pause resets the sampling window. These averages change the diagnostic display, not engine time or update behavior.

Frame Timing uses the same group hierarchy as Rendering and Game View contributions. Labels and wrapping values occupy an adaptive two-column layout. Trend graphs read the panel's bounded numeric buffers; ordinary contributed strings are not guessed to be numbers.

## Contribute a value

In an active host Editor module or panel, publish through the supplied context:

```csharp
using Inno.Editor.Core;

internal static class StreamingStatistics
{
    public static void PublishPending(
        EditorContext context,
        int pendingCount
    ) {
        context.statistics.Publish(new EditorStatistic(
            new EditorStatisticId("sample.streaming.pending"),
            new EditorStatisticGroupId("sample.streaming"),
            "Streaming", "Pending Requests", pendingCount.ToString()));
    }
}
```

Use globally stable IDs; changing the display name does not require changing identity. Publishing the same item twice in one frame replaces its earlier value. Current contributions overlay the completed-frame handoff, so panel drawing order does not lose data. Stop publishing when the value is no longer applicable; the handoff does not retain stale values indefinitely.

Unchanged content and ordering reuse an immutable snapshot. The Stats panel rebuilds groups only when that snapshot changes. The exchange owns no plugin callbacks or live objects, and its synchronization boundary protects publication and snapshot access.

## Keep sampling with its owner

The panel owns only its frame-time history and presentation. A feature requiring a profiler timeline, resource history or persistent measurement should own that data and present it through an appropriate feature. Publishing a string is not permission to retain another feature's mutable buffers.

The Stats implementation has no public or script API of its own. Scripts use the selected `InnoEditor.Core` contribution contract; host extensions use `Inno.Editor.Core`. A Stats drawing failure quarantines the panel for the current generation rather than stopping unrelated Editor content.
