---
title: Inno.Scripting.Compiler
description: SDK-bound script compilation, logical API projection and immutable candidate artifacts.
uid: project.inno-scripting-compiler
kind: project
owners: [Inno.Scripting.Compiler]
exampleMode: host
exampleProjects: [Inno.Scripting.Compiler]
---
# Inno.Scripting.Compiler

The compiler owns Roslyn compilation, trimmed reference assemblies, logical namespace diagnostics, source fingerprints, IDE projects and immutable Runtime/Editor script artifacts. It does not own the active assembly generation and is not part of Player execution.

Use [the scripts command](../../contributing/compile-project-scripts.md) for ordinary authoring. [Compilation architecture](../script-compilation.md) explains how IDE facades and real CLR emission agree.

## Capture one explicit environment

The host must supply `ScriptCompilerOptions.compilationEnvironment`. Each compile or projection operation captures one `ScriptCompilationInputs`: the selected SDK identity, actual framework references and SDK-defined conditional symbols. Collections are copied and read-only; reference bytes are frozen before Roslyn uses them.

The compiler does not select the newest installed reference pack, invoke Build/MSBuild itself or change user SDK configuration. The standard host supplies `SdkScriptCompilationEnvironment` through the existing SDK resolver and owned process/temporary-file mechanisms. Missing inputs, evaluation failure and cancellation fail before publication.

## Candidate and artifact contract

An API-shape fingerprint is different from an artifact identity. The latter also includes actual framework reference contents, compiler/emitter identity and language options. Unchanged API signatures do not authorize reusing an artifact from different compiler inputs.

Prepare caches and complete generations in private staging under the owning Library. Publish to a missing destination atomically, or transactionally replace a verified invalid cache. Reuse an already valid complete cache. Cancellation propagates through publication; failure before commit preserves or restores the previous directory.

Filesystem blocking beyond Core IO's bounded wait fails explicitly. If old-directory cleanup fails after a complete new cache commits, compilation still reports the IO failure and does not activate a generation. If installation and restoration both fail, preserve both errors and the previous-tree location. A later explicit request can validate a complete artifact; it cannot retroactively turn the earlier failure into success.

`CollectArtifacts` retains the directories still reachable by active sessions. Cache cleanup, generation activation and temporary staging retirement have distinct owners; do not delete an active generation to force recompilation.

## Validate sample source before commit

An owner-frame loop can validate an isolated sample import before committing its source transaction. The caller retains the transaction and compiler through validation, commit or cancellation cleanup. The validation callback compiles the supplied frozen source candidate; it must not activate a generation.

```csharp
using System;
using Inno.Assets.Pipeline;
using Inno.Scripting.Compiler;

static bool AdvanceSampleImport(
    AssetSampleImportTransaction import,
    ScriptCompiler compiler,
    ref bool validationStarted
) {
    if (!validationStarted)
    {
        if (!import.Advance())
            return false;
        import.BeginValidation(async (
            sources,
            cancellationToken
        ) =>
        {
            ScriptCompilationResult result = await compiler.CompileAuthoringGenerationAsync(
                cancellationToken: cancellationToken, sourceSnapshot: sources).ConfigureAwait(false);
            if (!result.success)
                throw new InvalidOperationException("Sample validation failed.");
        });
        validationStarted = true;
    }
    if (!import.isValidationComplete)
        return false;
    import.Commit();
    return true;
}
```

The function advances one already owned import; its false result means the operation needs another owner-frame opportunity, not that the transaction failed. Handle exceptions and dispose the transaction through its actual owner. See [sample import](../../manual/assets/import-samples.md) for source activation and rollback boundaries.

## API reference

[Browse exact types and members](../../api/engine/scripting/compiler/index.md).
