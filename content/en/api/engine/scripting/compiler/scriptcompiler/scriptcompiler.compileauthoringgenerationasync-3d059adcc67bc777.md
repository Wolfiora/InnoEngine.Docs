---
uid: api.3d059adcc67bc7772140b4066f6f9178783424021e890489a04ff3901aeab50c
symbol: "engine:Inno.Scripting.Compiler:M:Inno.Scripting.Compiler.ScriptCompiler.CompileAuthoringGenerationAsync(System.IProgress{Inno.Scripting.Compiler.ScriptCompilationProgress},System.Threading.CancellationToken,Inno.Assets.Pipeline.IAssetSourceSnapshot)"
source: xml
reviewed: 4d97a21a78c127f8d2077149af0d1e9ec29818fabf3422204c542e0e0da718b8
title: "ScriptCompiler.CompileAuthoringGenerationAsync"
kind: api
owners: [Inno.Scripting.Compiler]
apiSurface: source-clr
---

Compiles a complete runtime and editor candidate generation without activating it.

## Remarks

Source discovery captures live inputs on the owner thread. Reference generation, Roslyn and artifact writes run in the background; progress observers must accept callbacks from either thread. Retain the source generation until the returned operation drains, including after cancellation. Complete cache trees use Core IO atomic publication and replacement. A committed cache remains valid if cleanup of its previous tree fails; compilation does not activate either generation.

## Parameters

**Parameter `progress`:** Optional observer for monotonic compiler progress.

**Parameter `cancellationToken`:** The token that cancels compilation before an artifact generation is committed.

**Parameter `sourceSnapshot`:** Optional isolated authoring sources. Capture on its owner thread and keep its transaction alive until compilation drains; null selects the current Plugin candidate or active sources.

## Returns

The immutable diagnostics and artifacts produced by the compilation attempt.

## Exceptions

**Exception `T:System.OperationCanceledException`:** Thrown when `cancellationToken` is canceled.

**Exception `T:System.IO.IOException`:** Artifact publication fails, or cleanup fails after a complete cache tree commits.

**Exception `T:System.UnauthorizedAccessException`:** The filesystem continues denying artifact access after the bounded Core IO wait.

**Exception `T:System.AggregateException`:** Cache replacement and restoration both fail; the exception identifies the preserved previous tree.
