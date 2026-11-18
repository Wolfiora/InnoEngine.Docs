---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a768908c3d0811e16abb5cbcd52a6c447ef1ede4334be6d56cdba19ae9a533d5
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ToolchainEnvironment.RunAsync(Inno.Build.Toolchains.NativeBuildContext,System.String,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.Threading.CancellationToken)
title: ToolchainEnvironment.RunAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 6548b87e155912ce9966f887f6106f8a8ec7a8b4da122ca44d14e790069d65ad
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** A context resolved by NativeToolchainSelection before artifact fingerprinting.

**Parameter `fileName`:** A selected build command or an absolute executable declared as a component input.

**Parameter `arguments`:** Individual arguments passed without shell interpretation.

**Parameter `workingDirectory`:** The source snapshot or intermediate directory owned by the operation.

**Parameter `cancellationToken`:** Cancels and retires the complete process tree.

## Returns

Completion after successful exit and complete output delivery.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Host tools were not resolved, a command is unavailable or a process fails.

**Exception `T:System.OperationCanceledException`:** The operation was canceled.
