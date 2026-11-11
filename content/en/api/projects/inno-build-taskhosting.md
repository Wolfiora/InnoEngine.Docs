---
title: Inno.Build.TaskHosting
description: "Leased Task bootstrap, immutable runtime publication and private process loading."
uid: project.inno-build-taskhosting
kind: project
owners: [Inno.Build.TaskHosting]
---
# Inno.Build.TaskHosting

Leased Task bootstrap, immutable runtime publication and private process loading.

Read the linked task or ownership explanation before using the exact API below.

## Bootstrap without loading the full Task implementation

[Task-host isolation](../../architecture/task-hosts.md) explains Foundation bootstrapping, restore/compile identities, actual UsingTask registration, owned output, node yielding, publication and retirement. This library depends on Core IO, neutral Toolchains and MSBuild contracts, not BGCS, a concrete backend/platform or the full Tasks assembly.

## Public operation boundaries

BuildTaskRuntimeTask coordinates complete runtime compilation with the shared workspace lease and validates actual files before publication. RestoreOwnedProjectTask restores an explicitly selected closure with its own project metadata, not inherited solution-wide entry points. PublishTaskHostTask accepts the actual hashed runtime set and publishes a verified assembly for the requested private load owner.

MaterializeBindingsTask validates selected generation content under protection, atomically copies the one Compile source into the SDK intermediate owner, and preserves unchanged timestamps. RegisterTaskPublisherTask verifies and registers the actual publisher and bootstrap directories, including materialization-only builds.

Product projects consume the existing build/msbuild/Inno.Build.Tasks.targets integration rather than copying a second bootstrap recipe. The tool's RuntimeIdentifier follows the selected SDK host, not the published game's RID.

## Lifetime constraints

A Build registry retains only neutral immutable metadata. Request/output changes, failure and cancellation invalidate reuse. Waiting releases the MSBuild node; cancellation drains work and reacquisition still releases acquired resources on failure. Process ownership protects every dependency still needed after a Task returns. Unknown process status preserves outputs rather than authorizing deletion. Private loading and ordinary SDK compilation never become the same writable owner.

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.TaskHosting/Inno.Build.TaskHosting.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Browse types and members](../types/build-execution/inno-build-taskhosting/index.md).
