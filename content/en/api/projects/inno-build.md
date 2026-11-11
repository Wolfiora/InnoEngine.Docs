---
title: Inno.Build
description: "Owned Game/Plugin build transactions, content freezing and final platform publication."
uid: project.inno-build
kind: project
owners: [Inno.Build]
exampleMode: host
exampleProjects: [Inno.Build]
---
# Inno.Build

Owned Game/Plugin build transactions, content freezing and final platform publication.

Read the linked task or ownership explanation before using the exact API below.

## Authoring orchestration

BuildPipeline owns Game/Plugin orchestration, generation checks, streaming Content Packs, Support Pack validation, staging and installation. It borrows authoring services and does not reference Editor. Platform layout comes from IGameBuildTarget; content compiler and managed deployment provider are separate registered capabilities.

Prepare the selected Support Pack asynchronously before starting BuildGameAsync on the authoring owner's thread. Keep the returned lease until consumption finishes. A normal await does not return to that thread automatically. BuildGameAsync rejects a missing Pack rather than synchronously waiting for a provider while taking asset snapshots. A distribution host can consume preinstalled immutable Packs without a source provisioner.

## Freeze and compile one candidate

Copy the profile, freeze its output location and capture Assets/Plugins/Settings revisions and Serialization generation. Freeze content and logical script closure, validate the trimmed script API, then compile against the actual deployment's engine assemblies. Generate static registration, invoke the selected managed compiler, validate result identity/file membership and delegate final layout to the platform packager. Failure, cancellation or changed generation preserves the previous committed product.

SdkScriptCompilationEnvironment captures references and final symbols from the explicitly selected SDK in the authoring source context. Its process-owned SDK inputs live under Library/Scripting/SdkInputs; tasks drain before release. It does not expose MSBuild/Roslyn to the neutral compiler, guess reference-pack versions, rewrite global.json or mutate SDK/NuGet caches.

## Settings and identity

BuildTargetId is portable/open; actual support comes from registered immutable GameBuildTargetBinding values. Missing saved targets retain their ID and display Missing instead of being rewritten to the current OS. Settings.Build.inno supplies versioned authoring defaults; absent defaults derive from project name, host target and the first sorted imported deployable scene, excluding ~ sample directories. Only Settings Apply persists them. Each export dialog copies a fresh one-off request.

Game/Plugin identity comes from current Project ID, not a second Build identifier. persistentDataPath is a portable relative Local Application Data subdirectory; empty selects Application ID. Segments allow lowercase letters, digits, dot, underscore and hyphen but reject dot/dot-dot and absolute paths. Only Project settings enter Player runtime, not Editor or Build defaults.

## Publish and release

Reject outputs inside Assets, Plugins or Library, corrupt artifacts, unavailable Support Packs, missing runtime assemblies, escaping platform output paths and authoring-only startup scenes before commit. Content packing freezes exact keys, lengths and hashes with one deterministic index.

AtomicDirectory.Install coordinates two directory moves; callers own target read/write exclusion. It is not a gap-free file replacement. Installation failure attempts to restore the old directory. Post-commit backup-cleanup failure reports installed and residual paths while retaining the complete new output. Do not interpret that failure as an absent installation.

Pack catalogs validate the complete immutable target/fingerprint directory and its platform requirements under a reading lease. Current-index updates do not redirect an active consumer. Read [Support Packs](../../contributing/support-packs.md), [Player publication](../../platforms/publish-player.md) and [distribution composition](../../extending/build-distribution.md).

## Host usage

Supply existing live dependencies. This example checks the host contract; it does not initialize a complete product or certify a physical device.

```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Inno.Build;

static ValueTask<PlayerSupportPackLease> PrepareAsync(
    BuildPipeline pipeline,
    BuildProfile profile,
    CancellationToken cancellationToken
) => pipeline.EnsurePlayerSupportPackAsync(
    profile.target, profile.managedDeployment, cancellationToken);

static ValueTask<BuildResult> StartOnAuthoringThread(
    BuildPipeline pipeline,
    BuildProfile profile,
    string outputDirectory,
    IProgress<BuildProgress>? progress,
    CancellationToken cancellationToken
) {
    return pipeline.BuildGameAsync(new GameBuildRequest
    {
        profile = profile,
        outputDirectory = outputDirectory
    }, progress, cancellationToken);
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Inno.Build.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Browse types and members](../types/build-execution/inno-build/index.md).
