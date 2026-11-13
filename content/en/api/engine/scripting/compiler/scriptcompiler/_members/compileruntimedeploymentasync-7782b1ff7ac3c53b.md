---
uid: api.7782b1ff7ac3c53b0f00621d8a8d9bc507350dea5cd33493348d728652a64c16
symbol: "engine:Inno.Scripting.Compiler:M:Inno.Scripting.Compiler.ScriptCompiler.CompileRuntimeDeploymentAsync(System.String,System.IProgress{Inno.Scripting.Compiler.ScriptCompilationProgress},System.Threading.CancellationToken)"
source: xml
reviewed: 92b410784ddaa0ca59f6b9488a44050069a20c2171390449ff0a046cc3cc8b0d
title: "CompileRuntimeDeploymentAsync"
kind: api
owners: [Inno.Scripting.Compiler]
apiSurface: source-clr
---

Compiles only the runtime assembly closure required by a deployed Player and binds it to that Player runtime.

## Remarks

Complete cache trees use Core IO atomic publication and replacement. Cancellation before commit preserves the previous tree; cancellation does not undo a committed cache. Cleanup failure after commit preserves the installed tree and remaining backup without activating a generation.

**Parameter `targetRuntimeDirectory`:** The verified Player Support Pack directory whose runtime assemblies will execute the emitted scripts.

**Parameter `progress`:** Optional observer for monotonic compiler progress.

**Parameter `cancellationToken`:** The token that cancels compilation before an artifact generation is committed.

**Returns:** The immutable diagnostics and runtime-only artifacts produced by the compilation attempt.

**Exception `T:System.OperationCanceledException`:** Thrown when `cancellationToken` is canceled.

**Exception `T:System.ArgumentException`:** Thrown when `targetRuntimeDirectory` is empty.

**Exception `T:System.IO.DirectoryNotFoundException`:** Thrown when `targetRuntimeDirectory` does not exist.

**Exception `T:System.IO.InvalidDataException`:** Thrown when the target runtime has no valid Inno runtime assembly closure.

**Exception `T:System.IO.IOException`:** Artifact publication fails, or cleanup fails after a complete cache tree commits.

**Exception `T:System.UnauthorizedAccessException`:** The filesystem continues denying artifact access after the bounded Core IO wait.

**Exception `T:System.AggregateException`:** Cache replacement and restoration both fail; the exception identifies the preserved previous tree.
