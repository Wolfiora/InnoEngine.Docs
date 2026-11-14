---
uid: api.cfdf82511dfbe4a091fdf82d7a26a8a5e8f3315b6e14a708d0a0940847e5a39e
symbol: "engine:Inno.Build:M:Inno.Build.BuildPipeline.BuildGameAsync(Inno.Build.GameBuildRequest,System.IProgress{Inno.Build.BuildProgress},System.Threading.CancellationToken)"
source: xml
reviewed: d04650c5653dbc97d97287c5327c7399d18b213966fb0afe2800ad78442e24ac
title: "BuildPipeline.BuildGameAsync"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Builds and installs one complete source-free game deployment with rollback protection.

## Remarks

Prepare current packs with EnsurePlayerSupportPackAsync before invoking this method on the authoring owner's thread. The synchronous snapshot phase never waits for asynchronous provisioning. Coordinate readers and writers of the output directory during its two installation moves. Post-commit backup, staging and progress observer failures are warnings on the successful result.

**Parameter `request`:** The exact profile, destination, and activated runtime compilation generation.

**Parameter `progress`:** Optional observer for monotonic stage progress.

**Parameter `cancellationToken`:** The token that cancels work before directory installation begins.

**Returns:** The durable output identity and deployment metrics.

**Exception `T:System.OperationCanceledException`:** Thrown when cancellation is requested before commit.

**Exception `T:System.IO.DirectoryNotFoundException`:** The target Support Pack is missing; prepare it before starting the owner-thread build snapshot.

**Exception `T:System.IO.InvalidDataException`:** The target Support Pack is present but invalid.

**Exception `T:System.IO.IOException`:** Output installation fails before a complete candidate is committed.

**Exception `T:System.AggregateException`:** Output installation and restoration both fail; the previous tree remains at the reported backup path.
