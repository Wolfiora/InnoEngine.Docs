---
title: Import an installed plugin sample
description: Copy a sample into writable project sources while preserving transaction and deployment boundaries.
uid: manual.assets.samples
kind: how-to
owners: [Inno.Assets.Pipeline]
contracts: [project.inno-assets-pipeline#publication-and-failure-contract]
exampleMode: host
exampleProjects: [Inno.Assets, Inno.Assets.Pipeline]
---
# Import an installed plugin sample

An installed plugin's read-only `~` directory is a logical sample. Importing it creates a writable project copy with new asset identities and rewrites references inside that copy. It does not make the installed plugin writable.

## Understand the two uses of a sample directory

| Location | Authoring behavior | Runtime deployment |
| --- | --- | --- |
| Project directory beginning with `~` | Normal import, scripts, Editor use and Play Mode; shown as ISAMPLE | Excluded from game asset and script closure |
| Installed plugin directory beginning with `~` | Read-only sample; its scenes can be opened and played in the Editor | Excluded from plugin runtime assembly and Player closure |

A full project export to `.iplugin` carries its sample source files. A game export excludes `~` subtrees in any source. A normal runtime asset depending on an excluded sample, or a startup scene inside one, makes the runtime closure invalid; it is not silently copied into the game.

## Prepare and advance the transaction

The owner calls `PrepareSampleImport(source)` once and retains the returned transaction. The destination is `Assets/<original ~directory name>/`, preserving every leading `~` and adding no plugin-ID prefix. Conflicting targets, another source candidate and pending/faulted generations are rejected.

Preparation copies into a private stage, assigns new IDs to `.imeta` records, and rewrites structured source and embedded importer settings using the complete identity map. It excludes `.abin` and source noise. Links, changing source files and rewrite errors reject the candidate instead of publishing half a directory.

Advance from the owner frame loop without blocking while background work is pending:

```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Inno.Assets.Pipeline;

static bool AdvanceImport(
    AssetSampleImportTransaction import,
    Func<IAssetSourceSnapshot, CancellationToken, ValueTask> validate,
    ref bool validationStarted
) {
    if (!validationStarted)
    {
        if (!import.Advance())
            return false;
        import.BeginValidation(validate);
        validationStarted = true;
    }
    if (!import.isValidationComplete)
        return false;
    import.Commit();
    return true;
}
```

The host initializes `validationStarted` to false. After true is returned, stop advancing the committed transaction. Supply validation from the actual composition owner; the asset layer does not depend on a script compiler. Validation first captures its input on the owner thread and then may compute asynchronously against the candidate's read-only snapshot. Its continuation cannot mutate live asset services.

`isValidationComplete` means the work drained, not that it succeeded. `Commit` rethrows validation errors. Successful commit activates the candidate, performs optional history finalization, publishes and retires at one safe point, then emits one change notification. Background copying, hashing, rewriting and candidate import do not remove the cost of owner-side state capture and publication.

## Cancel or recover safely

`Cancel` requests cancellation while retaining resources. On failure or cancellation, enter rollback and drain admitted work before releasing the transaction or its pipeline. Pending retirement keeps the owners alive and allows the owning protocol to retry; a faulted transaction requires a host restart.

The worker retains the captured serialization generation and read protection until it drains. Source rewriters observe the provided cancellation token and touch only transaction-owned staging, never live Editor or thread-bound native state. After the watcher resumes, reconcile both catalog and filesystem indexes before notifying readers so external changes during the pause are retained.
