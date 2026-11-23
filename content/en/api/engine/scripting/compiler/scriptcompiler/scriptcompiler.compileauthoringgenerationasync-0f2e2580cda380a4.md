---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.0f2e2580cda380a4358dbe8b81131fe30922ab41ef641b08ae80504794f03806
symbol: engine:Inno.Scripting.Compiler:M:Inno.Scripting.Compiler.ScriptCompiler.CompileAuthoringGenerationAsync(System.IProgress{Inno.Scripting.Compiler.ScriptCompilationProgress},Inno.Assets.Pipeline.IAssetSourceSnapshot,System.Threading.CancellationToken)
title: ScriptCompiler.CompileAuthoringGenerationAsync
kind: api
owners:
- Inno.Scripting.Compiler
apiSurface: source-clr
sourceFingerprint: 68d35080cdd4de350503706d9cd1f9121b8c2dcd05e3bf07dd7aac95c9858887
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `progress`:** Optional observer for monotonic compiler progress.

**Parameter `sourceSnapshot`:** Optional isolated authoring sources. Capture on its owner thread and keep its transaction alive until compilation drains; null selects the current Plugin candidate or active sources.

**Parameter `cancellationToken`:** The token that cancels compilation before an artifact generation is committed.

## Returns

The immutable diagnostics and artifacts produced by the compilation attempt.

## Exceptions

**Exception `T:System.OperationCanceledException`:** Thrown when `cancellationToken` is canceled.

**Exception `T:System.IO.IOException`:** Artifact publication fails, or cleanup fails after a complete cache tree commits.

**Exception `T:System.UnauthorizedAccessException`:** The filesystem continues denying artifact access after the bounded Core IO wait.

**Exception `T:System.AggregateException`:** Cache replacement and restoration both fail; the exception identifies the preserved previous tree.

## Remarks

Source discovery captures live inputs on the owner thread. Reference generation, Roslyn and artifact writes run in the background; progress observers must accept callbacks from either thread. Retain the source generation until the returned operation drains, including after cancellation. Complete cache trees use Core IO atomic publication and replacement. A committed cache remains valid if cleanup of its previous tree fails; compilation does not activate either generation.
